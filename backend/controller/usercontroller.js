import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
import { signJwt,verifyJwt } from "../utils/jwt.js";
export const Signup = async(req,res)=>{
    try {
        const {name,username,email,age,gender,password,confirmpassword}= req.body;
        console.log(name,username,email,age,gender,password,confirmpassword)
        if(password!=confirmpassword){
            return res.status(400).json({
                error:"password do not match"
            })
        }

        console.log(password)
        const user = await User.findOne({email})
        if(user){
            res.status(400).json({
                error:"email already in use"
            })
        }

        console.log(user)
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password,salt)

        const newUser = new User({
            name,
            username,
            email,
            age,
            gender,
            password:hashedPassword,
            password
        })

        if(!newUser){
            res.status(400).json({
                error:"Not able to create , please retry"
        })}

        await newUser.save()
        return res.status(200).json({
            message : "user created sucessfully 😍"
        })


    } catch (error) {
        return res.status(500).json({
            error:error
        })
    }
}

export const Login = async (req,res) => {
   try {
    const {email,password}=req.body
    const user = await User.findOne({email})
    if(!user){
        return res.Status(400).json({
            error:"User doesn't exits, please Signup 🙏"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password)
    if(!isPasswordCorrect){
        return res.Status(400).json({
            error:"Incorrect Password"
        })
    }

    const authToken = signJwt(user._Id)
    res.cookie(
        "jwt",authToken,{
            httpOnly:true,
            maxAge:1*24*60*60*1000,
            sameSite: "none",  
            httpOnly: true,
            secure: true,
        }
    )
    res.Status(200).json({
        message:"Login Sucessfully"
    })

   } catch (error) {
     res.Status(400).json({
        error:"something band wrong"
     })
   }
}

export const Logout = async (req,res) => {
    try {
        res.clearCookie("jwt", {
            httpOnly: true,
            sameSite: 'Strict', 
            path: '/',    
        });

        res.status(200).json({
            message: "Logged out successfully"
        });
    } catch (error) {
        res.status(400).json({ error: "Unable to logout", message: error.message });
    }
}