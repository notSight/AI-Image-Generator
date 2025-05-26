import Post from "../models/post.model";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { createError } from "../errors.js";

dotenv.config();

cloudinary.config({ 
    cloud_name: 'dv0x9tleb', 
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET ALL POSTS
 export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 });
        res.status(200).json({success: true, data: posts});
    } catch (error) {
        next(error.status,error?.response?.data?.error?.messsage || error.message);
    }
 }