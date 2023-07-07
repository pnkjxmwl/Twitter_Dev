const Hashtag= require('../models/hashtags')


class HashtagRepository{

    async create(data)
    {
            try {

                const tag= await Hashtag.create(data)
                return tag
               } catch (error) {
                    console.log(error);
            }
    }
    async bulkCreate(data)
    {
        try {
            const tags= await Hashtag.insertMany(data)
            return tags;
        } catch (error) {
            console.log(error);
        }

    }
    async get(id)
    {
        try {

            const tag= await Hashtag.findById(id)
            return tag
           } catch (error) {
                console.log(error);
        }

    }
   
    async destroy(id)
    {
        try {

            const tag= await Hashtag.findByIdAndRemove(id)
            return tag
           } catch (error) {
                console.log(error);
        }
    }

    async findByName(titlelist){
        try {
            const tags= await Hashtag.find(
                {
                    title:titlelist
                }
            );
          // console.log(tags);
            return tags
        } catch (error) {
            
        }

    }

}
module.exports= HashtagRepository