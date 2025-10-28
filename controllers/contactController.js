
const Contact=require("../models/contactModel");

exports.about=(req,res)=>{
    res.send("<h1> I am About Page</h1>")
}

/*
EndPoint : /
methods : GET
description: render the home 
*/

exports.getHomePage=async(req,res)=>{
 try {
    const contacts=await Contact.find().lean();
    res.render("contact/home",{title:"contacts Home",contacts})
 } catch (error) {
    console.log(error);
    res.send("server error")
 }
}

/*
EndPoint : /add-contact
methods : GET
description: render the add contact pages 
*/
exports.getAddContact=(req,res)=>{
    try {
        res.render("contact/add",{title:"Add Contact"})
    } catch (error) {
           console.log(error);
    res.send("server error")
    }
}

/*
EndPoint : /add-contact
methods : POST
description: sending the data to the mongodb database
*/
exports.addSingleContact=async(req,res)=>{
try {
        await Contact.insertOne(req.body);
        res.redirect("/")
} catch (err) {
     console.log(error);
    res.send("server error")
    
}
}

/*
EndPoint : /edit-contact
methods : GET
description: render the Edit /upadteSinglecontact pages 
*/
exports.getEditContact=async(req,res)=>{
    try {
        const id= req.params.id
        const contact=await Contact.findById(id).lean()
        res.render("contact/edit",{title:"update Contact",contact})
    } catch (error) {
           console.log(error);
    res.send("server error")
    }
}

// put ,patch
exports.getUpdatesingleContact=async (req,res)=>{
       try {
        const id= req.params.id
        await Contact.updateOne({_id:id},{$set:req.body});
        res.redirect("/")
    } catch (error) {
           console.log(error);
    res.send("server error")
    } 
}

// delete 
exports.deleteSingleContact=async(req,res)=>{
    try {
        const id=req.params.id;
        await Contact.deleteOne({_id:id});
        res.redirect("/")
    } catch(error) {
        console.log(error);
        res.send("server error")
        
    }
}