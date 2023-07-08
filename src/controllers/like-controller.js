import LikeService from "../services/like-service.js";

const likservice= new LikeService();


export const toggleLike= async (req,resp)=>{

    try {

      const response=  await likservice.toggleLike(req.query.modelId,req.query.modelType,req.body.userId)
        return resp.status(200).json({
            success:true,
            data:response,
            message:"Success in toggling the like",
            err:{}
        })
    } catch (error) {
        console.log(error);
        resp.status(500).json(
            {
                success:false,
                message:"something went wrong",
                err:{error}
            }
        )
    }

}