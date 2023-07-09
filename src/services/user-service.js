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
}
export default UserService