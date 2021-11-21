const express=require("express");
const app=express();
const mongoose = require('mongoose');

const URI = 'mongodb+srv://test1:test1@cluster0.u27ol.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

const stu=require("./schema");
mongoose.connect(URI).then(()=>console.log("Conected to DataBase"));
app.use(express.json())
app.post("/add-new-post",async(req,res)=>{
const name=req.body.Name;
const Regnumber=req.body.Registration_number;
const sub_marks=req.body.Marks;
try
{
const st=new stu(
{
Name:name,
Registration_number:Regnumber,
Marks:sub_marks
}
)
const savedst=await st.save()
res.json(
{"message":"Student marks are saved","data":savedst}
)
}
catch(err)
{
res.json(err);
}
})
app.use("/",(req,res)=>{
res.send("Nikhil")
res.json({
})
}
)
app.listen(3000,()=>console.log("Express has started!"))