const express = require("express");
const bodyparser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();

var items=["Annawar", "Nwe lay", "Seafood girl"];
var workitems=[];

app.set("view engine", "ejs");

app.use(bodyparser.urlencoded({extended :true}));
app.use(express.static("public"));

app.get("/", function(req, res){

  const day=date.getDate();

  res.render("list", {day:day, additem: items});
});

app.get("/work", function(req, res){
  res.render("list", {day: "Work List", additem: workitems});
})

app.get("/about", function(req, res){
  res.render("about");
})

app.post("/",function(req,res){
  var item = req.body.addlist;
  if(req.body.list==="Work"){
    workitems.push(item);
    res.redirect("/work");
  }
  else{

    items.push(item);
    res.redirect("/");
  }
})

app.listen(3000, function(){
  console.log("server is run at 3000");
})
