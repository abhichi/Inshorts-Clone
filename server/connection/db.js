import mongoose from 'mongoose';


const Connection = async () => {
    try {
    const URL = `mongodb://user:abhi1234@clone-inshort-shard-00-00.vx7zv.mongodb.net:27017,clone-inshort-shard-00-01.vx7zv.mongodb.net:27017,clone-inshort-shard-00-02.vx7zv.mongodb.net:27017/INSHORTS-CLONE?ssl=true&replicaSet=atlas-75cw18-shard-0&authSource=admin&retryWrites=true&w=majority`;

    await mongoose.connect(URL, { useNewUrlParser: true})
    
    console.log('Database connected successfully');

    } catch (error) {
        console.log('Error while connecting with Database', error);
    }
}

export default Connection;