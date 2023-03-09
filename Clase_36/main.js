import express from 'express'
import twilio from 'twilio'
import dotenv from 'dotenv'
dotenv.config();

const app = express()

const accountSid = process.env.TWILIO_ACCOUNT_SID
const authToken = process.env.TWILIO_AUTH_TOKEN

const client = twilio(accountSid, authToken)


// const numbers = ['+xxxxxxxx', '+xxxxxxxx']

try {
    let messasge = ''

    for (const number of numbers) {
        messasge = await client.messages.create({
            from: 'whatsapp:+14155238886',
            to: `whatsapp:${number}`,
            body: 'Todo funciona bien con Tweilio y NodeJS! - clase_36',
            mediaUrl: ['https://empresas.blogthinkbig.com/wp-content/uploads/2019/11/Imagen3-245003649.jpg?w=800']
        })
        console.log(messasge);
    }
} catch (error) {
    console.log(error);
}


const options = {
    // cuerpo del mensaje
    body: "Hola soy un WSP desde nodeJS",
    mediaUrl: ["https://pbs.twimg.com/media/D4uQCqNW4AA4s0I.jpg"],
    from: "whatsapp:+14155238886",
    to: "whatsapp:+xxxxxxxx",
};

app.post('/twilio-coder', async (req, res) => {
    try {
        const message = await client.messages.create(options);
        res.send({ data: message })
    } catch (error) {
        console.log(error);
    }
})


app.listen(8080, () => {
    console.log('Server ok');
})