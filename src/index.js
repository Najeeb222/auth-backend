
import { app } from "./app.js"
import connectDB from "./config/database.js"
import dotenv from 'dotenv'

dotenv.config({
    path: './env'
})


connectDB().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`server is runnger on ${process.env.PORT} `)
    })
}).catch((err) => {
    console.log('DB connection failed', err)
})