const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");

//configure env
dotenv.config();

app.use(cors());
app.use(express.json());

//config database
// connectDB();

//PORT
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`MeduCare Running on port ${PORT}`);
});