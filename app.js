const express = require("express")
const mongoose=require("mongoose")
const path=require("path")
const app=express();
var cors = require('cors');
const router=require("./routes/lead-route.js");

app.use(express.json());
app.use(cors()) ;
app.use(express.urlencoded({extended:true}));

app.use("/",router);

const port=3050;
mongoose.connect(
    "mongodb+srv://nancyverma632002:pHpDe7egH2QgHmoC@cluster0.hijkfsw.mongodb.net/?retryWrites=true&w=majority"
).then(()=>{
    app.listen(port,()=>{
        console.log(`listening at port ${port}`)
    })
}).catch(err=>{
    console.log(err);
})