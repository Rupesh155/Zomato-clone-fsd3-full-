const express = require('express');
const router = express.Router();
 let Product=     require('../models/Products')
//  create api for Product

   router.post('/product',   async (req,res)=>{
    try{
        let product=   new Product(req.body)
        await product.save()
        res.status(201).send(product)

    }catch{
        console.log('err');
        res.send({msg:"err"})

    }
       

   })




   //   get all Restraurant 
 router.get('/product',  async (req,res)=>{  

    try{
        let product=  await Product.find()
        if(!product){

          res.send('products not foundddd')
          
        }
        else{
            res.send(product)
        }

    }
    catch{
        console.log('err');
        res.send({msg:"errrr"})

    }

 })





//    get particular products by id
 router.get('/product/:id',  async (req,res)=>{


    try{
       let product=    await   Product.findById(req.params.id)
       if(!product){
          res.status(404).send('not founddddd')

       }
       else{
           res.send(product)
       }

    }
    catch{
       res.send('err')
    }
        
})




 
//  update productss by id
router.patch('/product/:id',   async(req,res)=>{
    try{
        let product=      await Product.findByIdAndUpdate(req.params.id, req.body, {new:true})
         if(product){
            res.send(product)
         }
         else{
            res.send('not foundddddd not updateddddd')
         }
    }
    catch (err){
        console.log('errr' ,  err);
    }      

} )





router.delete('/product/:id', async(req,res)=>{

    try{
        let product=   await  Product.findByIdAndDelete(req.params.id, {new:true})
        if(!product){
           res.send('not founddd')
        }
        else{
           res.send('deleteddd')
        }

    }
    catch{
        res.send('errrrrr')
    }

       

})



   module.exports=router

