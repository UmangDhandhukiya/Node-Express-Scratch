//----1) node js is REPL of javascript means read evaluate print and loop

// let a = 10
// console.log(a)
// console.log("Hello world");

//----2) process in node js global object like windows(in js)---- 
// console.log(process);

//----3) argv return array of path and we are using this for pass argument in terminal
// console.log(process.argv); 

let newArray = process.argv.slice(2)
console.log(newArray);

//----4) cwd() current working it is return path of folder from where your project or file begun run
console.log(process.cwd());

//----5) __dirnamr tgis gives the path where the current code and process running
console.log(__dirname);


//----------------------------PATH MODULE------------------------------------

const path = require('path')

let ans = path.join("hello//","//how","are","you")
console.log(ans);
