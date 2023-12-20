const mongoose=require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/newdatabase1').then(p=>console.log("sucessfully connected to db"))
.catch(err=>console.log(err))

const schema=mongoose.Schema({

        "firstname":String,
        "lastname":String,
        "email":String,
        "number":String,

        "namef" : String,
        "emailf":String,
        "subjectf":String,
        "messagef":String


    })

    
    const model=mongoose.model('table1',schema)
    
    model.find().then(p=>console.log(p)).catch(err=>console.log(err))
    module.exports=model
