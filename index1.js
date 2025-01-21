import express from "express";
import bodyParser from "body-parser";

//this part is important to get the absolute path where the files is going to store when this is deployed to local or remote server.
import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

app.get("/", (req, res) => {
  console.log (__dirname + "/public/index.html and people are accessing the main site");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit",(req,res)=>{
  console.log(req.body);
  console.log("This is what user input in the form");
});


app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

