const express =require('express')
const app=express()
const router=express.Router();
const bodyParser=require('body-parser')
app.use(express.json());
app.use(bodyParser.json())
const {collectionOfData,generateData}=require('../Controller/products');
router.post("/postdata",generateData)
router.route("/testing").get(collectionOfData);


module.exports=router;