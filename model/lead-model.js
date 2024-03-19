const mongoose=require("mongoose");
const jioLead=mongoose.Schema({
    fName:{
        type:String,
        require:true,
    },
    lName:{
        type:String,
        require:true,
    },
    mobile:{
        type:Number,
        require:true,
    },
    address:{
        type:String,
        require:true,
    },
    pinCode:{
        type:Number,
        require:true,
    },
    state:{
        type:String,
        require:false,
    },
    city:{
        type:String,
        require:false,
    },
    product:{
        type:String,
        require:true,
    },
    date:{
        type:Date,
        require:true,
    },
    time:{
        type:String,
        require:true,
    }
   
});

module.exports=mongoose.model("jio_Lead",jioLead);