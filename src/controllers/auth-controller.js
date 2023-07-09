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
export const login= async (req,resp)=>{

    try {
        const token= await userservice.signin(req.body);
        
        return resp.status(200).json({
            message:"Login Success",
            data:token,
            success:true
        })
    } catch (error) {
        return resp.status(401).json({
            message:"Something went wrong",
            data:{},
            success:false,
            err:error
        })
    }


}