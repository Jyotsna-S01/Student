import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./db.js";
import model from "./model.js";
import { hashPassword,comparePassword } from "./passwords.js";
import jwt from "jsonwebtoken";


const PORT = process.env.PORT||2001

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.post('/api/signup', async(req, res) =>{
    try {
        const {name, email, password} = req.body;
        console.log(req.body);
        if(!name){
            return res.send({error: "Name is required"})
        }
        if(!email){
            return res.send({error: "Email is required"})
        }
        if(!password){
            return res.send({error: "Password is required"})
        }

        const existingUSer = await model.findOne({email})
        if(existingUSer) {
            return res.status(200).send({
                success:  false,
                message: "User already registered. Please login",
            });
        }

        const hashedPassword = await hashPassword(password);

        const user = await new model({
            name,
            email,
            password: hashedPassword,
        }).save();

        res.status(201).send({
            success: true,
            message: "Account created.",
            user,
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error creating account",
            error,
        });
    }
})

app.post("/api/signin", async(req,res) =>{
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(404).send({
                success: false,
                message: "Invalid emailid or password"
            });
        }

        const user = await model.findOne({ email});
        if(!user){
            return res.status(404).send({
                success: false,
                message: "Email is not registered"
            })
        }

        const match = await comparePassword(password, user.password)
        if(!match){
            return res.status(200).send({
                success: false,
                message: "Invalid password"
            })
        }

        const token = await jwt.sign({_id: user._id}, process.env.JWT_SECRET, {
            expiresIn: "10d",
        });
        res.status(200).send({
            success: true,
            message: "Login success",
            user:{
                _id: user.id,
                name: user.name,
                email: user.email,
            },
            token,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error in login",
            error,
        })
    }
})

db();

app.listen(PORT, () =>{
    console.log(`Server is running on port ${PORT}`);
})