import MongoDBClient from "./MongoDBClient.class.js";

const conn = new MongoDBClient();

await conn.connect();

// setTimeout(() => {
    console.log('procesos')
// }, 5000);

await conn.disconnect();