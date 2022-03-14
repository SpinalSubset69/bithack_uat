const mongoose = require("mongoose");

module.exports = async (dbUri) => {
  try {
    await mongoose.connect(dbUri);
    console.log("Database connected");
  } catch (ex) {
    console.log(ex.message);
  }
};
