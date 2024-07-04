import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import userRouter from './routes/user.route.js';
import authRouter from "./routes/auth.route.js"
import cookieparser from 'cookie-parser';
import listingRouter from './routes/listing.route.js'
import path from 'path';// for deployment
dotenv.config();
mongoose.connect(process.env.MONGO)
    .then(() => { console.log("connected to MongoDB!"); })
    .catch((err) => { console.log("err"); });

    const __dirname = path.resolve();// for deployment


const app = express();
app.use(express.json());
app.use(cookieparser());


app.listen(3000, () => console.log("server is runing on port 3000"));
app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(__dirname, '/client/dist')));//for deployment

app.get('*', (req, res) => {            //for deployment
  res.sendFile(path.join(__dirname, 'client', 'dist', 'index.html'));//for deployment
})                                           //for deployment

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode ||500;
    const message=err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
}); //error handler middlewear( learn from tutorial point and medium)