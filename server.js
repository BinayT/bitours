const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config({ path: "./config.env" });

const DB = process.env.ATLAS_URI.replace("<PASSWORD>", process.env.PASSWORD);
mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log(
      "-------------------------------------MongoDB connected Successfully-------------------------------------"
    );
  });

const port = 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
