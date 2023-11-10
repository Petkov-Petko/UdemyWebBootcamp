import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello</h1>")
});

app.get("/contact", (req, res) => {
    res.send("Contact me")
  });
  
  
app.listen(3000, () => {
  console.log("Server runing on port 3000.");
});

app.post