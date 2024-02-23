let Menu=    require('../models/menu')
let  express=     require('express')

 let router=    express.Router()


 router.post('/menu'  , async(req,res)=>{
    try{

       let  menu=    new Menu(req.body)
          await menu.save()

          res.send(menu)     

    }
    catch{
        console.log('err');
        res.send('errr')
    }


 })



   //   get all Restraurant 
   router.get('/menu',  async (req,res)=>{  

    try{
        let menu=  await Menu.find()
        if(!menu){

          res.send('menus not foundddd')
          
        }
        else{
            res.send(menu)
        }

    }
    catch{
        console.log('err');
        res.send({msg:"errrr"})

    }

 })






//    get particular menus by id
router.get('/menu/:id',  async (req,res)=>{


    try{
       let menu=    await  Menu.findById(req.params.id)
       if(!menu){
          res.status(404).send('not founddddd')

       }
       else{
           res.send(menu)
       }

    }
    catch{
       res.send('err')
    }
        
})



 
//  update menuss by id
router.patch('/menu/:id',   async(req,res)=>{
    try{
        let menu=      await Menu.findByIdAndUpdate(req.params.id, req.body, {new:true})
         if(menu){
            res.send(menu)
         }
         else{
            res.send('not foundddddd not updateddddd')
         }
    }
    catch (err){
        console.log('errr' ,  err);
    }      

} )


router.delete('/menu/:id', async(req,res)=>{

    try{
        let menu=   await  Menu.findByIdAndDelete(req.params.id, {new:true})
        if(!menu){
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







