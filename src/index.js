//require('dotenv').config({path :'./env})

// import mongoose, { mongo } from "mongoose";
// import { DB_NAME } from "./constants";
import dotenv from "dotenv";
import connectDB from "./db/index.js";

dotenv.config({
    path : './env'
})

connectDB()


/*

// app initialization with the help of express 

import express from "express"
const app = express()

// connection of database by using iffi : 

;( async ()=> {
    try{
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        app.on("error", (error)=>{
            console.log("ERRR : ", error)
            throw error
        })

        app.listen(process.env.PORT, ()=>{
            console.log(`Process is listening on port ${process.env.PORT}`)
        })
    }catch (error){
        console.error("Error : ", error)
        throw err
    }

})()

*/