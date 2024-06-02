const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://prafulla:mern123@cluster0.25ezqp2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("connected to Mongodb server");
});
db.on("error", (err) => {
  console.error("mongodb connection error", err);
});
db.on("disconnected", () => {
  console.log("mongodb disconnected");
});

module.exports = db;
