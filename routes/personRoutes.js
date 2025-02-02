const express=require('express');
const router=express.Router();
const Person = require('./../models/Person');


// post method for person data to grt from user
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newPerson = new Person(data);
        const responce = await newPerson.save();
        console.log('data saved');
        res.status(200).json(responce);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
})

// get method for person data
router.get('/', async (req, res) => {
    try {
        const data = await Person.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
})



// the API for the worktype
router.get('/:workType',async(req,res)=>{
    try{
        const workType = req.params.workType; //extract the worktype from the URL parameter
        if(workType=='cheif'||workType=='manager'||workType=='waiter'){
            const responce=await Person.find({work:workType});
            console.log('responce fetched');
            res.status(200).json(responce);
        }else {
            res.status(400).json({ error: 'Invalid work type' });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const ID=req.params.id;
        const data = req.body;
        const responce = await Person.findByIdAndUpdate(ID,data,{
            new:true,runValidators:true
        });
        console.log('data updated');
        res.status(200).json(responce);

        if(!responce){
            return res.status(200).json({error:"person not found"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Data is not updated...' });
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const ID=req.params.id;
        const responce=await Person.findByIdAndDelete(ID);

        console.log('data deleted');
        res.status(200).json(responce);
        if(!responce){
            return res.status(200).json({error:"person not found"})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Data is not deleted...' });
    }
})


module.exports=router;