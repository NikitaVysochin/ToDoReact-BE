const express = require("express");

const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

const apiRoutes = require('./src/modules/routes/routers'); 

app.use(cors());
const uri = "mongodb+srv://Nikita:restart987@cluster0.1fkli.mongodb.net/ToDoList?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use('/', apiRoutes);

app.listen(8000, () => {
  console.log("...port 8000");
});
