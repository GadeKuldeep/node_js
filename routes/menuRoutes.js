const express=require('express');
const router=express.Router();
const MenuItem = require('./../models/MenuItem');
const { route } = require('./personRoutes');

// post method for menu item data
router.post('/', async (req, res) => {
    try {
        const data = req.body;
        const newMenuItem = new MenuItem(data);
        const responce = await newMenuItem.save();
        console.log('data saved');
        res.status(200).json(responce);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
});

// get method for menu item data
router.get('/', async (req, res) => {
    try {
        const data = await MenuItem.find();
        console.log('data fetched');
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
});

router.get('/:taste',async(req,res)=>{
    try{
        const tasteType = req.params.taste; //extract the taste type from the URL parameter
        if(tasteType=='sour'||tasteType=='spicy'||tasteType=='sweet'){
            const responce=await MenuItem.find({taste:tasteType});
            console.log('responce fetched');
            res.status(200).json(responce);
        }else {
            res.status(400).json({ error: 'Invalid menu type' });
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const ID=req.params.id;
        const data=req.body;
        const responce=await MenuItem.findByIdAndUpdate(ID,data,{new:true,runValidators:true});
        console.log('data updated');
        res.status(200).json(responce);
        if(!responce){
            return res.status(200).json({error:"Menu not found..."})
        }
    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const ID=req.params.id;
        const responce=await MenuItem.findByIdAndDelete(ID);
        console.log('data deleted');
        res.status(200).json(responce);
        if(!responce){
            return res.status(200).json({error:"Menu not found..."})
        }

    }catch(err){
        console.log(err);
        res.status(500).json({ error: 'Internal server error...' });
    }
})
// this is comment for testing
module.exports=router;