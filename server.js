const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const routes = require('./route/routes');
const cors = require('cors');

app.use(cors(
    {
        origin: "http://localhost:8080"
    }
));

const port = 9000;

app.listen(port, function () {
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});

mongoose.connect("mongodb://localhost:27017/login", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("Successfully Connected to DB");
})
.catch((error) => {
  console.log("Error Connecting to DB", error);
});

app.use(express.json());
app.use(routes);