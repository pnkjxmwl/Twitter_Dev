import UserService from "../services/user-service.js";
const userservice= new UserService();

export const signup= async (req,resp)=>{
    try {
        const response= await userservice.signup({
            email:req.body.email,
            password:req.body.password,
            name:req.body.name
        })
        return resp.status(201).json({
            success:true,
            message:"Succesfully created a new user",
            data:response,
            err:{}
        })    
    } catch (error) {
            return resp.status(500).json({
                message:"something went wrong",
                data:{},
                success:false,
                err:error
            })
    }
    
}