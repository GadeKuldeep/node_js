const mongoose=require ('mongoose');

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
        },
    work:{
        type:String,
        required:true,
    },
    mobile:{
        type:String,
        reqired:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    address:{
        type:String,
        required:true
    },
    salary:{
        type:Number,
        required:true
    }


});


const Person=mongoose.model('person',personSchema);
module.exports=Person;