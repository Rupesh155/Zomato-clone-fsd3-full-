
let mongoose=    require('mongoose')
      let orderItemSchema=   new  mongoose.Schema({
        menu_id:{
            type:mongoose.Schema.Types.ObjectId,
            ref:'Menu'
        },
        quantity:{
            type:Number
        }
       
      })

     let  OrderItem=    mongoose.model('OrderItem',orderItemSchema)
     module.exports=OrderItem
