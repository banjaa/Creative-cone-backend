const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const connectionString =
  "mongodb+srv://sum:sum2008@database.dzrel7r.mongodb.net/news";
exports.connectDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`Successfully connected`);
    return `Mongoose Connected`;
  } catch (err) {
    console.log(err.message);
    return err.message;
  }
};
