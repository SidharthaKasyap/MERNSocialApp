const mongoose = require("mongoose");


exports.connectDatabase = () =>{
    mongoose
      .connect("mongodb+srv://Sidkasyap:Sidkashyap@cluster0.hazb2.mongodb.net/MERNSocialApp?retryWrites=true&w=majority")
      .then((con) => console.log(`Database connected: ${con.connection.host}`))
      .catch((err) => console.log(err));
}