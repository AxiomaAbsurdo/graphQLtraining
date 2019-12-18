import { MongoClient } from 'mongodb';

// Connection URL
const url =
    'mongodb+srv://vairix:xiriav3102@graphqltraining-ow69w.mongodb.net/test?retryWrites=true&w=majority';
// Use connect method to connect to the Server
export default function dbConnect() {
    return MongoClient.connect(url, { promiseLibrary: Promise }).then(client =>
        client.db('example')
    );
}
