const fs = require("node:fs");

/* fs.writeFile("Hello.txt", "Hello from Node", (err) => {
  if (err) console.log("error while creating file:", e);
  else {
    console.log("File created!");
  }
}); */

fs.readFile("Hello.txt", 'utf-8' ,(err, data) => {
    if (err) 
        console.log("error while creating file:", e);
    else {
      console.log(data);
    }
  });