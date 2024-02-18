
let mongoose=    require('mongoose')
      let productSchema=   new  mongoose.Schema({
        name:{
            type:String
        },
        descriptions:{
            type:String
        },
        price:{
            type:Number
        },
        image:{
            type:String
        }

      })

     let Product=    mongoose.model('Product',productSchema)

     module.exports=Product









    