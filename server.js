const express = require("express");
const app = express();
const fs = require("fs");
const cors = require("cors");

let port = process.env.PORT || 9000;
app.use(cors());

app.get("/",(req,res)=>{
  res.sendFile(__dirname+'/page/index.html');
});

app.post('/receive',(req,res)=>{
  console.log("1")
  let text="";
  const filePath = __dirname+"/data/text.txt";
  req.on('data',data=>{
    text+=data;
  });
  req.on('end',()=>{
    fs.appendFile(filePath,text,()=>{
      res.end()
    })
  })
})

app.listen(port,()=>{
  console.log(`app on${port}`);
})