
let mongoose=    require('mongoose')
      let menuSchema=   new  mongoose.Schema({
        name:{
            type:String
        },
        descriptions:{
            type:String
        },
        price:{
            type:Number
        }
     

      })

     let Menu=    mongoose.model('Menu',menuSchema)

     module.exports=Menu
