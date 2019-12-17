import {MongoClient} from 'mongodb'
// var MongoClient = require('mongodb').MongoClient
import assert from 'assert'
//  assert = require('assert');

// Connection URL
const url ='mongodb+srv://vairix:xiriav3102@graphqltraining-ow69w.mongodb.net/test?retryWrites=true&w=majority';
// Use connect method to connect to the Server
const dbConnect = async () =>{
  const db = await MongoClient.connect(url, { promiseLibrary: Promise } ); 
  //console.log('veo el DB' , db)
     return db
} 


// import mongoose from 'mongoose';
// const dbPath =
//     'mongodb+srv://vairix:xiriav3102@graphqltraining-ow69w.mongodb.net/test?retryWrites=true&w=majority';

// const dbConnect = () => {
//     mongoose.connect(dbPath, {
//         useNewUrlParser: true,
//     });

//     const db = mongoose;
//     db.connection.on('error', () => {
//         console.log('> error occurred from the database');
//     });
//     db.connection.once('open', () => {
//         console.log('> successfully opened the database');
//     });
//     db.s
//     return db;
// };

export default dbConnect;
