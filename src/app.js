const express = require('express');
const app= express();
const port= process.env.PORT || 8000               //enviornment
const path= require('path');
const hbs = require('hbs');


//public static path
const staticPath= path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../template/views");
const partials_path =path.join(__dirname, "../template/partials");

//hbs view engine
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);




app.use(express.static(staticPath));



//Routing
app.get("", (req,res)=>{
    res.render("index");
});

app.get("/about", (req,res)=>{
    res.render("about");
});

app.get("/weather", (req,res)=>{
    res.render("weather");
});

app.get("*",(req,res)=>{
    res.render("404",{
        errormsg:"Opps! page not found"
    });
});


app.listen(8000,()=>{
    console.log("8000");
});