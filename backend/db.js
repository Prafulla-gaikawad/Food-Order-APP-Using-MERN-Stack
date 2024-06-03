const mongoose = require("mongoose");
const mongoURL =
  "mongodb+srv://prafulla:mern123@cluster0.25ezqp2.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0";

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("connected");

    const fetched_data = mongoose.connection.db.collection("food_items");
    const data = await fetched_data.find({}).toArray();
    console.log();
  } catch (err) {
    console.error("--", err);
  }
};

module.exports = mongoDB;
