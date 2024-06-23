const express = require("express");
const mongoose = require('mongoose')

const loggers = require("./middleware/loggers.js"); 

const {
  getallproducts,
  getproduct,
  postproduct,
  putproduct,
  deleteproduct,
} = require("./controllers/postcontrollers.js");

const app = express();
const port = 4000;

app.use(loggers); 
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 



app.get('/' , (req, res)=>{
    res.send("Welcome to my API")
});

app.post("/api/products", postproduct);
app.get("/api/products", getallproducts);
app.get("/api/products/:id", getproduct);
app.put("/api/products/:id", putproduct);
app.delete("/api/products/:id", deleteproduct);

mongoose
  .connect(
    "mongodb+srv://wwwakshaykumar04855:r7rumgNmjMUw2Qvp@backenedapi.41oar2s.mongodb.net/crud-api?retryWrites=true&w=majority&appName=backenedapi"
  )
  .then(() => {
    console.log("connected to the database");

    
  })
  .catch((error) => {
    console.log("unable to connect", error);
  });

  app.listen(port, () => {
    console.log(`app listening on the port http://localhost:${port}`);
  })




















