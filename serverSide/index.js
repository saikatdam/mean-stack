const express =require('express')
const app = express()
const cookieParser=require('cookie-parser')
const bodyParser=require('body-parser')
const port = 3000
const cors=require('cors')
const route=require('./routes/routing')
const DataModel=require('./dbConnector')
var mongoConnect=require('mongoose')
let URL='mongodb+srv://saikatdam:Sourav03@cluster0.rlgkylm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
app.use(cors())
app.use(bodyParser.json())

app.use("/api",route)
app.use(cookieParser());
let connection=mongoConnect.connect(URL)
if(connection)
    console.log("done")


app.get('/api/shoppingCart/getNotes', async (req,res)=>{
    const data= await DataModel.find({})
    res.json(data)
 })

 //testing cookie

 let cookieValue="iampass";
const CookieChecking= async(req,res,next)=>{
  const cookieRetriver= await req.cookies.mycookie;
  console.log(cookieRetriver);
  if(cookieRetriver===cookieValue){
    next();
  }
  else{
  res.json({"info":"You are not an authorized user"});
}
}
app.get('/checkingCookie',CookieChecking,(req,res)=>{
  res.send("Yes you are an authorized user");
})



app.get('/', (req, res) => {
  res.cookie('mycookie', cookieValue, {
      maxAge: 3600, // Cookie expiration time in seconds
      httpOnly: true, // Makes the cookie accessible only via HTTP(S) requests
       path:'/',// The path where the cookie is valid
      secure: true,
      sameSite: 'strict' // Makes the cookie accessible only over HTTPS
  }).send("show");
});

// listening the port 
app.listen(port,()=>{
    console.log("listening...")
})
app.post('/checkAuth',(req,res)=>{
data=req.headers.Authentication.split(',')[1];
console.log(data)
})


