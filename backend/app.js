const express=require('express')
const app=express()
const model=require('./db.js')
const cors=require("cors")
const bodyparser=require("body-parser")
app.use(bodyparser.json())
app.use(cors())   

app.post("/",(req,res)=>
{
    const data=new model({
        "firstname":req.body.firstname,
        "lastname":req.body.lastname,
        "email":req.body.email,
        "number":req.body.number,

        "namef":req.body.namef,
        "emailf":req.body.emailf,
        "subjectf":req.body.subjectf,
        "messagef":req.body.messagef
    })

    data.save().then(p=>res.send({"message":"data saved"})).catch(err=>console.log(err))
})

app.listen(7877,(err)=>{if(!err){console.log("server on")}})

