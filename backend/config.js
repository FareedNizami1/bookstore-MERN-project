import dotenv from 'dotenv';
dotenv.config();

export const PORT = 5555;

export const mongoDB_URL = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_KEY}@books-store-mern.8las9.mongodb.net/books-collection?retryWrites=true&w=majority&appName=Books-Store-MERN`
