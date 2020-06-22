const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Tour = require('../../models/tour.model');

dotenv.config({ path: './config.env' });

const DB = process.env.ATLAS_URI.replace('<PASSWORD>', process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(
      '-------------------------------------MongoDB connected Successfully-------------------------------------'
    );
  });

//Reads Json file
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours-simple.json`, 'utf-8')
);

//Import data into database
const importData = async () => {
  try {
    await Tour.create(tours);
    console.log('Data successfully imported!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

//Delete all data from collection

const deleteData = async () => {
  try {
    await Tour.deleteMany();
    console.log('Deleted successfully');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
