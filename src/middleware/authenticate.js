import passport from "passport";

export const authenticate= (req,resp,next)=>{
  
    passport.authenticate('jwt',(err,user)=>{
        if(err) next(err)
        if(!user){
            return resp.status(401).json({
                message:"unauthorized access no token" 
            })
        }

        req.user= user;
        next();
    })(req,resp,next);
}