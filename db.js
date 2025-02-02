const mongoose =require('mongoose');

// Define the MongoDB connection URL
const mongoURL='mongodb://localhost:27017/hotels' //replace  hotels with your database name

// setup mongodb connection
mongoose.connect(mongoURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

// Get the default connction
// Mongoose maintain default connection object representing the mongodb connection
const db=mongoose.connection;

// Define an event listener for the DataBase connection 
db.on('connected',()=>{
    console.log("Cnnected to mongodb server...");
})
// for error
db.on('error',(err)=>{
    console.error("Error in connecting to mongodb server",err);
})
// for disconnection
db.on('disonnected',()=>{
    console.log("Disconnected from mongodb server");
})

// export this db connection to the app.js file as follows

module.export=db;