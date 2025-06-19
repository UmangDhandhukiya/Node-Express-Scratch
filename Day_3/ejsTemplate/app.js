const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path")
app.use(express.json()); //for convert data into json

app.set("view engine", "ejs"); //to set ejs for define we are using ejs
app.set('views',path.join(__dirname,'views'))
app.use(express.static(path.join(__dirname,"public")))

// ejs = embeded javaScript which is used for html and js combined
// set is used for declare we are using ejs in our file

app.get('/',(req,res)=>{
    let number = Math.floor(Math.random()*10)
    res.render("index",{number})
})

app.get('/todo',(req,res)=>{
  let myTask = ["karate","coding","playing","walking"]
  res.render("todo",{myTask})
})

app.listen(PORT, (req, res) => {
  console.log(`Server start on ${PORT}`);
});
