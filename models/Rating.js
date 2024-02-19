
let mongoose=    require('mongoose')
      let ratingSchema=   new  mongoose.Schema({
          user_id:[{
            type:Schema.Types.ObjectId,
            ref:'User'

          }],
          rating:{
            type:Number
          }

          
       

      })

     let Rating=    mongoose.model('Rating',ratingSchema)

     module.exports=Rating
