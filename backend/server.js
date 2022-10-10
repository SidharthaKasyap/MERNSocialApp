const app = require("./app");
const { connectDatabase } = require("./config/database");
const cloudinary = require("cloudinary");


connectDatabase();

cloudinary.config({
  cloud_name:"sidcloudinary",
  api_key:"755814545494312",
  api_secret:"LKO7mO6kpUiGFGgv-w7k78TT4sU",
});

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});
