const express = require("express");
const app = express();
const PORT = 8080;
app.use(express.json());

let users = [];
let currentId = 1;

//get route

app.get("/user", (req, res) => {
  res.send(users);
});

//post route

app.post("/signUp", (req, res) => {
  let { name, email, pass } = req.body;
  const newUser = {
    id: currentId++,
    name,
    email,
    pass,
  };
  users.push(newUser);
  res.send(newUser);
  //   res.status(200).json({ message: "user created successfully" }, newUser);
});

//put route for update

app.put("/user/:id", (req, res) => {
  let { id } = req.params;
  let { name, email, pass } = req.body;
  const user = users.find((u) => {
    return u.id === parseInt(id); 
  });
  if (!user) {
    res.status(404).json({ message: "user not found." });
  }
  user.name = name;
  user.email = email;
  user.pass = pass;
  res.status(200).json({ message: "User Updated successfully." });
});

//delete route for delete record

app.delete("/user/:id", (req,res) => {
  let {id} = req.params

  const idNotFound = users.find((u) => u.id === parseInt(id))

  if(!idNotFound){
  res.status(404).json({ message: "User Not Found." });
  }

  users = users.filter((u) => u.id !== parseInt(id))
  res.status(200).json({ message: "User Deleted Successfully." });
})

app.listen(PORT, () => {
  console.log(`server run on port number ${PORT}`);
});
