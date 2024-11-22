
export const Signup = async(req,res)=>{
    try {
        const {name,email,age,gender,password,confirmpassword}=req.body;

        if(password!=confirmpassword){
            return res.Status(400).json({
                error:"password do not match"
            })
        }

        
    } catch (error) {
        
    }
}