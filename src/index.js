const express = require('express');
const graphqlHTTP = require('express-graphql');
// const schema = require('./schema/schema')
// const schemaCourse = require('./schema/course');
import { schema } from './schema/';

//const schemaProf = require('./schema/schemaProf');
import dbConnect from './utils/dbConnection';

const start = async () => {
    const db = await dbConnect();
    console.log(db);

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
// const auth = require('./utils/auth');

// console.log(process.env.SECRET_KEY_JWT_COURSE_API);

// mongoose
//   .connect('mongodb://localhost/coursedb', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false
//   })
//   .then(() => console.log('Conectado a MongoDB correctamente'))
//   .catch(err => console.log('No se ha Conectado a MongoDB correctamente'));

//import * as courseSchema from './schema/course'
// schema.forEach( s => {
//   types.push(s.types);
//   queries.push(s.types);
//   mutations.push(s.types);
// })

// app.use(auth.checkHeaders);

// app.use(
//   '/graphql',
//   graphqlHTTP(req => {
//     return {
//       schema,
//       context: {
//         user: req.user
//       }
//     };
//   })
// );
