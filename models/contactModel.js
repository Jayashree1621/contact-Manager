const {Schema , model}=require("mongoose");

const contactSchema=new Schema({
    cname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    }
});

const Contact =model("contact",contactSchema);

module.exports=Contact;

