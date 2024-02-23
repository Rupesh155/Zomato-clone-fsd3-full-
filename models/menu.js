
let mongoose=    require('mongoose')
      let menuSchema=   new  mongoose.Schema({
        name:{
            type:String
        },
        descriptions:{
            type:String
        },
        cat:{
            type :String,
            enum:['veg','non-veg'],
            default:"veg"
        }
      
      })

     let Menu=    mongoose.model('Menu',menuSchema)
     module.exports=Menu
