import like from "../models/like.js";
import CrudRepository from "./crud-repo.js";

class LikeRepository extends CrudRepository{

    constructor(){
        super(like);
    }

    async findByUserAndLikable(data){

        try {
            const res= await like.findOne(data)
            return res
        } catch (error) {
            throw error
        }


    }

}

export default LikeRepository; 