const express = require("express");
const app = express();
let PORT = 8080;

//MiddleWare

// app.use((req, res) => {
//   res.send("<h1>Hello World!!</h1>");
// });

//use of get method

app.get("/home", (req, res) => {
  res.send("<h1>Use of get method in home </h1>");
});

//path parameter (dynamic route) in this we can used any value for anything 

app.get("/r/:anything", (req, res) => {
  console.log(req.params);
  console.log(req.params.anything);
  let { anything } = req.params;
  res.send(`<h1>this is a ${anything}</h1>`);
});

//query parameter it is used for ? query in url and set in key value pair

app.get("/search",(req,res)=>{
    console.log(req.query);
    console.log(req.query.movie);
    let{movie} = req.query
    res.send(`<h1>hello this is ${movie}</h1>`)

})

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
