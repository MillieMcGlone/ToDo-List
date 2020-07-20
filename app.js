// jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + '/date.js')
const weather = require(__dirname + '/weather.js')
const app = express();

const items = ["buy food", "cook food", "eat food"];
let workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : true}));

app.use(express.static("public"));

//getting the date
app.get("/", function(req, res){
let temp = weather.getWeather();
let day = date.getDate();
res.render('list', {listTitle: day, newListItems: items, temp:temp});
});

// getting information submitted from the form
app.post("/", function(req, res){
   item = req.body.newItem;

  if (req.body.list === "work"){
    workItems.push(item)
    res.redirect('/work')
  }else{
    items.push(item);

  res.redirect("/");
  }
});


app.get("/work", function(req, res){
  res.render("list", {listTitle: "work list", newListItems: workItems});
});

app.get('/about', function(req, res){
  res.render("about")
})

app.listen(3000, function(){
  console.log("server started on port 3000")
})
