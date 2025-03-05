require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Connect to database
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB database Connected...'))
.catch((err) => console.log(err))

app.use("/api/items",require("./routes/routes"));

//start the server
app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
