import User from "../models/userModel.js"
import bcrypt from "bcryptjs"
export const Signup = async(req,res)=>{
    try {
        const {name,username,email,age,gender,password,confirmpassword}=req.body;

        if(password!=confirmpassword){
            return res.Status(400).json({
                error:"password do not match"
            })
        }

        const user = await User.findOne({email})
        if(user){
            res.Status(400).json({
                error:"email already in use"
            })
        }

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
            res.Status(400).json({
                error:"Not able to create , please retry"
        })}

        await newUser.save()
        return res.Status(200).json({
            message : "user created sucessfully 😍"
        })


    } catch (error) {
        return res.Status(500).json({
            error:"Server is not responding"
        })
    }
}

export const Login = async (req,res) => {
    const {email,password}=req.body
    const user = await User.findOne({email})
    if(!user){
        return res.Status(400).json({
            error:"User doesn't exits, please Signup 🙏"
        })
    }

    const isPasswordCorrect = await bcrypt.compare(password,user.password)
}