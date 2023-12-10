import mongoose from "mongoose";
const connectDb=async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDb database connected : ${conn.connection.host}`);
    }
    catch(error){
        console.log(`Connection Error:$(error.message)`);

    }
}

export default connectDb;