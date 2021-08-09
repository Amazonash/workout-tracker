const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect( "mongodb+srv://amazonash:_Xf3VUhUV_4d.a2@cluster0.nriyh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false
});

process.env.MONGODB_URI

// routes
app.use(require("./routes/api.js"));

app.use(require("./routes/page.js"))

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
