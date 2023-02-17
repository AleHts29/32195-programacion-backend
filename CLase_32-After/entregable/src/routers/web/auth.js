import config from '../../config.js'
import { Router } from 'express'
import path from 'path'

import passport from 'passport';
import { Strategy as FacebookStrategy } from 'passport-facebook'
import { Strategy as LocalStrategy } from 'passport-local'

const authWebRouter = new Router()

if (config.auth == 'NO_AUTH') {

    passport.use('local-login', new LocalStrategy({
        passReqToCallback: true
    }, (req, username, password, done) => {
        const user = {
            id: 1,
            nombre: 'Marian',
            foto: 'https://scontent.faep25-1.fna.fbcdn.net/v/t1.6435-9/79175418_10220617267807377_9172612193500266496_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeFEHKLnmh9s4aqPsUcmfaqKxkR_73jQ5_bGRH_veNDn9lb5Q3_iC_6_hXbgU6C1rR0&_nc_ohc=vMvxp4gcEvEAX-5MjoR&_nc_ht=scontent.faep25-1.fna&oh=155286ac4824a5cdc39b5f25e01ba79f&oe=61802419',
            email: 'marian@mail.com'
        }
        return done(null, user);
    }));

    passport.serializeUser((user, done) => {
        done(null, user);
    });

    passport.deserializeUser((user, done) => {
        done(null, user);
    });

    authWebRouter.get('/login', (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect('/')
        } else {
            res.render(path.join(process.cwd(), '/views/pages/test-login.ejs'), { specs: config.getSpecs() })
        }
    })

    authWebRouter.post('/login', passport.authenticate('local-login',
        {
            successRedirect: '/',
            failureRedirect: '/faillogin'
        }
    ));

} else {

    passport.use(new FacebookStrategy({
        clientID: config.facebookClientId,
        clientSecret: config.facebookClientSecret,
        callbackURL: '/auth/facebook/callback',
        profileFields: ['id', 'displayName', 'photos', 'emails'],
        scope: ['email']
    }, function (accessToken, refreshToken, profile, done) {
        let userProfile = {
            nombre: profile.displayName,
            foto: profile.photos[0].value,
            email: profile.emails[0].value,
        }
        return done(null, userProfile);
    }));

    passport.serializeUser(function (user, cb) {
        cb(null, user);
    });

    passport.deserializeUser(function (obj, cb) {
        cb(null, obj);
    });

    authWebRouter.get('/login', (req, res) => {
        if (req.isAuthenticated()) {
            res.redirect('/')
        } else {
            res.render(path.join(process.cwd(), '/views/pages/fb-login.ejs'), { specs: config.getSpecs() })
        }
    })

    authWebRouter.get('/auth/facebook', passport.authenticate('facebook'));
    authWebRouter.get('/auth/facebook/callback', passport.authenticate('facebook',
        {
            successRedirect: '/',
            failureRedirect: '/faillogin'
        }
    ));
}

authWebRouter.get('/faillogin', (req, res) => {
    res.render(path.join(process.cwd(), '/views/pages/login-error.ejs'), { specs: config.getSpecs() });
})

authWebRouter.get('/logout', (req, res) => {
    const nombre = req.user?.nombre ?? 'visitante'
    req.logout()
    res.render(path.join(process.cwd(), '/views/pages/logout.ejs'), { nombre, specs: config.getSpecs() })
})

export default authWebRouter