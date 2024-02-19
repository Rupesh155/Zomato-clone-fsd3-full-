
let mongoose=    require('mongoose')
      let menuSchema=   new  mongoose.Schema({
        user_id:[{
            type:Schema.Types.ObjectId,
            ref:'User'

          }],
          restraurant_id:[{
            type:Schema.Types.ObjectId,
            ref:'Restraurant'

          }],
        price:{
            type:Number
        },
        status:{
            type :String,
            enum:['pending','confirmed','delivered'],
            default:"pending"
        }
     

      })

     let Menu=    mongoose.model('Menu',menuSchema)

     module.exports=Menu
