const express = require('express');
const router = express.Router();
 let Restraurant=     require('../models/restraurant')


//  create api for restraurant

 router.post('/restro', async (req,res)=>{
        try{   
              let restraurant=   new Restraurant(req.body)
               await  restraurant.save()
               res.status(201).send(restraurant)

        }
        catch(err){
            console.log(err,   'errrr');
            res.status(402).send('err')

        }

 })



//   get all Restraurant 
 router.get('/restro',  async (req,res)=>{  

    try{
        let restraurant=  await Restraurant.find()
        if(!restraurant){

          res.send('restraurant not foundddd')
          
        }
        else{
            res.send(restraurant)
        }

    }
    catch{

    }

        



 })



 router.get('/restro/:id',  async (req,res)=>{


     try{
        let restraurant=    await   Restraurant.findById(req.params.id)
        if(!restraurant){
           res.status(404).send('not founddddd')

        }
        else{
            res.send(restraurant)
        }

     }
     catch{
        res.send('err')
     }
         
 })