import user from "../models/User.js";
import CrudRepository from "./crud-repo.js";

class userRepository extends CrudRepository{

    constructor(){
        super(user);
    }

    async findBy(data){
        try {
            const resp= await user.findOne(data);
            return resp;
        } catch (error) {
            throw error
        }
    }

 
}

export default userRepository;