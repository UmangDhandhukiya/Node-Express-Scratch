const express = require("express");
const app = express();
const PORT = 8080;
const path = require("path")
app.use(express.json()); //for convert data into json

app.set("view engine", "ejs"); //to set ejs for define we are using ejs
app.set('views',path.join(__dirname,'views'))

// ejs = embeded javaScript which is used for html and js combined
// set is used for declare we are using ejs in our file

app.get('/',(req,res)=>{
    res.render("index")
})

app.listen(PORT, (req, res) => {
  console.log(`Server start on ${PORT}`);
});
