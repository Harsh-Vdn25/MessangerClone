import mongoose from 'mongoose';
require("dotenv").config();

export async function connectDB(){
    const mongo_url=process.env.MONGO_URL;
    if(!mongo_url){
        throw new Error("No URL found");
    }
    try{
        await mongoose.connect(mongo_url);
    }catch(err){
        console.log(err);
    }
}