const express=require('express')
const app=express();
const DataModel=require('../dbConnector')
const jwt=require('jwt-token')
const bodyParser=require('body-parser')

app.use(bodyParser.json());
app.use(express.json());
const collectionOfData=  (req,res)=>{
    res.send("welcome back")
}

const generateData = async(req,res)=>{
  try{ 
  const {name,desc}=req.body;
    console.log(req.body)
     const  result= new DataModel({name,desc});
     const done=await result.save();
     if (done){
       return res.status(201).json({"success":"Data stored Successfully"})
     }
    }
    catch(error){
      console.error(error);
    }
  }

   

module.exports={collectionOfData,generateData};