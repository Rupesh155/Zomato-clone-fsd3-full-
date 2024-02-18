let mongoose=    require('mongoose')
          let restraurantSchema=  new mongoose.Schema({
            name:{
                type:String
            },
            address:{
                type:String,

            },
            description:{
                type:String

            },
            image:{
                type:String

            },
            contact_No:{
                type:Number
            },
            opening_time:{
                type:Date

            }

        })

    let Restraurant=  mongoose.model('Restraurant',restraurantSchema)

    module.exports=Restraurant