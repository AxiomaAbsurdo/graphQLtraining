import mongoose from 'mongoose';
const dbPath = 'mongodb+srv://vairix:xiriav3102@graphqltraining-ow69w.mongodb.net/test?retryWrites=true&w=majority';


const dbConnect = () => {
    mongoose.connect(dbPath, {
        useNewUrlParser: true,
    });
    
    const db = mongoose.connection;
    db.on("error", () => {
        console.log("> error occurred from the database");
    });
    db.once("open", () => {
        console.log("> successfully opened the database");
    });

    return db
}


export default dbConnect;