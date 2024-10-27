import mongoose from "mongoose";
import userModel from "../models/user.model.js";
import bycrypt from "bcrypt";
//TODO:
// Obtain the Name, Email and the Password

const signup = async(request, response)=>{
    try{
        const {name, email, password} = request.body;
        const checkUser = await userModel.findOne({email});
        if(checkUser){
            response.send({message: "User already exists"}).status(409);
        }
        else{
            const hashedPassword = await bycrypt.hash(password, 10);
            const user = new userModel({name, email, password: hashedPassword});
            await user.save();
            response.send({message: "User created successfully"}).status(201).data(user);
        }
    }
    catch(err){
        console.log('Error in Signup Process -- >',err);
    }
}

const login = async(request, response)=>{
    try{
        const {email, password} = request.body;
        const user = await userModel.findOne({email});
        if(!user){
            response.send({message: "User does not exist"}).status(404);
        }
        else{
            const checkPassword = await bycrypt.compare(password, user.password);
            if(checkPassword){
                response.send({message: "Login Successful"}).status(200);
            }
            else{
                response.send({message: "Incorrect Password"}).status(401);
            }
        }
    }
    catch(err){
        console.log('Error in Login Process -- >',err);
    }
}

export {signup, login}