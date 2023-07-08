import like from "../models/like";
import CrudRepository from "./crud-repo";

class LikeRepository extends CrudRepository{

    constructor(){
        super(like);
    }



}

export default LikeRepository;