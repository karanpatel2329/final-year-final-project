
const mongoose = require("mongoose");
mongoose.connect(
    `mongodb+srv://admin:Admin%40123@finalyearprojectbackend.xhy5c.mongodb.net/FinalYearProjectDB?retryWrites=true&w=majority`, 
    {
      useNewUrlParser: true,
    }
  );
  
  const db = mongoose.connection;
  db.on("error", console.error.bind(console, "connection error: "));
  db.once("open", function () {
    console.log("Connected successfully");
  });