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

app.post("/signUp", (req, res) => {
  let { name, email, pass } = req.body;
  const newUser = {
    id: currentId++,
    name,
    email,
    pass,
  };
  users.push(newUser);
  res.send(newUser)
//   res.status(200).json({ message: "user created successfully" }, newUser);
});

app.listen(PORT, () => {
  console.log(`server run on port number ${PORT}`);
});
