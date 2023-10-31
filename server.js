const express = require("express");
const mongoose = require("mongoose");
const app = express();

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/students", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    const personalInfoSchema = new mongoose.Schema({
      name: String,
      age: Number,
    });

    const PersonalInfo = mongoose.model("personalinfo", personalInfoSchema);

    // Fetch the "name" and "age" fields from the "personalinfo" collection
    app.get("/api/personalinfo", async (req, res) => {
      const data = await PersonalInfo.find({}, "name age");
      res.json(data);
    });

    console.log("MongoDB connected");
  } catch (err) {
    console.error(err);
  }
};

connectDB();

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
