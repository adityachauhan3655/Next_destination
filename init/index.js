const mongoose = require("mongoose");
const initdata = require("./data ");
const Listing = require("../models/listing");

const MONGOOSE_URL = "mongodb://127.0.0.1:27017/Next_destination";

main()
  .then((res) => {
    console.log("Connected to db successfully");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGOOSE_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  await Listing.insertMany(initdata.data);
  console.log("data saved succesfull");
};

initDB();
