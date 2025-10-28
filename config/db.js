const mongoose=require("mongoose")

const url="mongodb://localhost:27017/contactsManager";

const connectDb=async()=>{
   await mongoose.connect(url);
   console.log("mongodb database is created");
};

module.exports=connectDb;
