import {userRepository} from '../repository/index.js'

class UserService{
    constructor(){
        this.userrepo=new userRepository();
    }
    async signup(data){
        try {
            const user=await this.userrepo.create(data)
            return user    
        } catch (error) {
            console.log(error);
        }
        


    }
    async getUserByEmail(email){
        try {
                const user= await this.userrepo.findBy({email});
                return user;
        } catch (error) {
            console.log(error);
        }
    }
    async   signin(data){
        try {
            const user= await this.getUserByEmail(data.email);
        
        if(!user){
            throw {
                message:"User not found"
            }
        }
        if(!user.comparePassword(data.password))
        {
         throw{
                message:"Incorrect Pass"
            }
        }
        const token= user.genJWT();
        return token
        } catch (error) {
            throw error
        }
    }
}
export default UserService