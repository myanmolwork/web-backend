import dotenv from "dotenv"
import express from 'express'

import connectDB from "./db/index.js";
const app = express()

dotenv.config(
    {
        path:'./.env'
    }
)



connectDB()
.then((result) => {
    app.listen(process.env.PORT || 8000,()=>
    {
        console.log(`Server is running at port ${process.env.PORT}`)
    })
}).catch((err) => {
    console.log("Mongo db conncetion establish. ", err)
});








