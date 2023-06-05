import express from 'express';
import { createHandler } from 'graphql-http/lib/use/express';
import { schema } from './schema.mjs'
// import { MongoClient } from 'mongodb'
import mongoose from 'mongoose';

// Connection URL
const dsn = 'mongodb://admin:1234@localhost:27017';
// const client = new MongoClient(url);

// const dbName = 'test_db';

// await client.connect()
// .then(() => {
//     console.log('success')
// })
// .catch((reason) => {
//     console.log('Error')
// })
// console.log('Connected successfully to server');

// const db = client.db(dbName);
// const collection = db.collection('users');

// console.log(await collection.find({age: 22}).toArray())

mongoose.connect(dsn,{dbName:'test_db'})
.then(() => {
    console.log('mongodb Connected successfully to server');
})


// Create a express instance serving all methods on `/graphql`
// where the GraphQL over HTTP express request handler is
const app = express();
app.all('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');