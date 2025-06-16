var giveMeJoke = require('give-me-a-joke')
var figlet = require("figlet");

//to get a brandom joke
// giveMeJoke.getRandomDadJoke(function(joke){
//     console.log(joke);
    
// })


// to get figlet text
figlet("Umang !!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});