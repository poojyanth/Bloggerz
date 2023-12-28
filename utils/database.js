import mongoose from 'mongoose';

let isConnected = false;

export const connectToDatabase = async () => {
    mongoose.set('strictQuery', true);

    if (isConnected) {
        console.log('mongodb connected')
        return;
    }

    try{
        await mongoose.connect(process.env.MONGODB_URI, {
            dbName: "bloggerz",
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
    }
    catch(error){
        console.log(error);
    }
}