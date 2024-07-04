import { errorHandler } from "./error.js";
import jwt from 'jsonwebtoken';

export const verifyToken=(req,res,next)=>{
  const token=req.cookies.access_token;
  if(!token) return next(errorHandler(401,'unauthorized'));
  jwt.verify(token,process.env.JWT_SECRET,(err,user)=>{
    if(err) return next(errorHandler(403,'forbidden'));
    req.user=user;//send the id to the route (updateuser) which is present inside the token at the time whwn we create  the cookie we give id as a payload
    next();
  });
};