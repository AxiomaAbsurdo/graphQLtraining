const express = require('express');
const graphqlHTTP = require('express-graphql');
import { schema } from './schema/';
import dbConnect from './utils/dbConnection';

const start = async () => {
    const db = await dbConnect();

    const app = express();
    app.use(
        '/graphql',
        graphqlHTTP({
            schema,
            graphiql: true,
            context: { db },
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
