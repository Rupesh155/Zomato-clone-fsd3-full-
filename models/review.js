
let mongoose=    require('mongoose')
      let reviewSchema=   new  mongoose.Schema({
          user_id:[{
            type:mongoose.Schema.Types.ObjectId,
            ref:'User'

          }],
          comments:{
            type:String
          }

          
       

      })

     let Review=    mongoose.model('Review',reviewSchema)

     module.exports=Review
