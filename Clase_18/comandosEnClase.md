<!-- Agregamos 3 usuarios -->
coderhouse> db.users.insertOne({name: "Walter", descripcion: "usuario"})

<!-- Nos muestra info muy detallada de la collecion usuario -->
coderhouse> db.users.stats()

coderhouse> db.users.storageSize()
36864

coderhouse> db.users.totalIndexSize()
36864

coderhouse> db.users.totalIndexSize()
36864

<!-- Podemos renombrar el nombre de las colleciones -->
coderhouse> db.users.renameCollection('user')
{ ok: 1 }

coderhouse> show collections
products
user

<!-- Creamos una nueva coleccion e insertamos elementos -->
coderhouse> db.cars.insertMany([{year: 1890, marca: "mazda"}, {year: 1994, marca:"audi"}, {year:2015, marca:"WV"}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("63a104fe265bfa52b7b2b3df"),
    '1': ObjectId("63a104fe265bfa52b7b2b3e0"),
    '2': ObjectId("63a104fe265bfa52b7b2b3e1")
  }
}

coderhouse> db.cars.find({marca:'WV'})
[
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3e1"),
    year: 2015,
    marca: 'WV'
  }
]

<!-- Explicar lo del ID -->

coderhouse> db.cars.countDocuments()
3

<!-- Ejercicio -->




<!-- POST BREACK - busqueda con filtros -->

coderhouse> db.cars.find({year:{$gt:1990}})
[
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3e0"),
    year: 1994,
    marca: 'audi'
  },
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3e1"),
    year: 2015,
    marca: 'WV'
  }
]

coderhouse> db.cars.find({year:{$gt:1994}})
[
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3e1"),
    year: 2015,
    marca: 'WV'
  }
]

coderhouse> db.cars.find({year:{$gte:1994}})

coderhouse> db.cars.find({year:{$lte:1994}})

coderhouse> db.cars.find({year:{$ne:1994}})

<!-- Filtros desde un array -->
coderhouse> db.cars.find({year:{$in:[1890, 1994]}})
coderhouse> db.cars.find({year:{$nin:[1890, 1994]}})

<!-- OR -->
coderhouse> db.cars.find({$or:[{year: 1890}, {marca:'WV'}]})



<!-- Agregamos mas registros para hacer consultas mas complejas -->
coderhouse> db.cars.insertMany([{year: 1986, marca: "ford"}, {year: 2005, marca:"chevrolet"}, {year:2019, marca:"jeep"}])

coderhouse> db.cars.find()
[
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3df"),
    year: 1890,
    marca: 'mazda'
  },
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3e0"),
    year: 1994,
    marca: 'audi'
  },
  {
    _id: ObjectId("63a104fe265bfa52b7b2b3e1"),
    year: 2015,
    marca: 'WV'
  },
  {
    _id: ObjectId("63a113b2265bfa52b7b2b3e2"),
    year: 1986,
    marca: 'ford'
  },
  {
    _id: ObjectId("63a113b2265bfa52b7b2b3e3"),
    year: 2005,
    marca: 'chevrolet'
  },
  {
    _id: ObjectId("63a113b2265bfa52b7b2b3e4"),
    year: 2019,
    marca: 'jeep'
  }
]
coderhouse> db.cars.find({$and: [ {$or:[{year:{$lt: 1890}}, {year:{$gt:1980}}]}, {$or:[{marca:'ferrari'}, {year:2005}]} ]   })
[
  {
    _id: ObjectId("63a113b2265bfa52b7b2b3e3"),
    year: 2005,
    marca: 'chevrolet'
  }
]

coderhouse> db.cars.find({year: {$gt: 2000}}, {year: 1, marca: 1, "_id":0})
[
  { year: 2015, marca: 'WV' },
  { year: 2005, marca: 'chevrolet' },
  { year: 2019, marca: 'jeep' }
]



<!-- UPDATE -->
coderhouse> db.cars.update({marca: 'mazda'}, {$set:{marca:'BMW'}})
DeprecationWarning: Collection.update() is deprecated. Use updateOne, updateMany, or bulkWrite.
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}




<!-- ROLES -->
test> use admin
switched to db admin

admin> use db_for_roles
switched to db db_for_roles


db_for_roles> use admin
switched to db admin

admin> db.createUser({user:'lector', pwd:'123123', roles:[{role:'read', db: 'db_for_roles'}]})
{ ok: 1 }
admin> db.createUser({user:'escritor', pwd:'123123', roles:[{role:'readWrite', db: 'db_for_roles'}]})
{ ok: 1 }


<!-- Cerramos todo y volvemos a iniciar tanto el server como el mongosh -->
❯ mongod --config /opt/homebrew/etc/mongod.conf --auth

❯ mongosh -u lector

test> use db_for_roles
switched to db db_for_roles

db_for_roles> db.users.insertOne({test: 'test'})
MongoServerError: not authorized on db_for_roles to execute command { insert: "users", documents: [ { test: "test", _id: ObjectId('63a133e8d26c8b8fa018073e') } ], ordered: true, lsid: { id: UUID("871d39a8-b17d-4fa5-a403-0e507fab006f") }, $db: "db_for_roles" }



<!-- hacemos de vuelta el inicio de sesion con el usuario escritor -->
❯ mongosh -u escritor
Enter password: ******

test> use db_for_roles
switched to db db_for_roles
db_for_roles> 

db_for_roles> db.users.insertOne({test: 'test'})
{
  acknowledged: true,
  insertedId: ObjectId("63a134cd358076caa8529119")
}

