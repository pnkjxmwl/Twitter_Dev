import CommentService from "../services/comment-service.js";

const commentservice= new CommentService();

export const createComments= async(req,resp)=>{

        try {
            const response= await commentservice.create(req.query.modelId,req.query.modelType,req.user.id,req.body.content)
            return resp.status(201).json({
                success:true,
                message:'SuccesFully Created a new comment',
                data:response,
                err:{}
            })
        } catch (error) {
            console.log(error);
            return resp.status(500).json({
                success:false,
                message:'Not Success in Creating a new comment',
                data:{},
                err:{error}
            })
        }

}