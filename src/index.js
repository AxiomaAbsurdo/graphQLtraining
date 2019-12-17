const express = require('express');
const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema')
// const schemaCourse = require('./schema/course');
import { schema } from './schema/';

//const schemaProf = require('./schema/schemaProf');
import dbConnect from './utils/dbConnection';


const start = async () => {
    const db = await dbConnect();
    //console.log(db);

    const app = express();
    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
            context: { db }
        })
    );

    app.listen(3131, () => {
        console.log('Escuchando del puerto: 3131');
    });
};

try {
    start();
} catch (err) {
    console.log(err);
}


export default start
