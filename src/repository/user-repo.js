import user from "../models/User.js";
import CrudRepository from "./crud-repo.js";

class userRepository extends CrudRepository{

    constructor(){
        super(user);
    }
 
}

export default userRepository;