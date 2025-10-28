const express=require("express");
const path=require("node:path");
const handlebars=require("express-handlebars");
const connectDb=require("./config/db");
const methodOverride=require("method-override");
const contactRoute = require("./routes/contactRoute")

const app=express();

connectDb()

// method override
app.use(methodOverride("_method"))

// static middleware use to run the css file content
app.use(express.static(path.join(__dirname,"public")));
// to get the data from the form 
app.use(express.urlencoded());

// set the handlebars engine 
app.engine("handlebars",handlebars.engine());
app.set("view engine", "handlebars");
//mvc

app.use("/", contactRoute);

module.exports=app;