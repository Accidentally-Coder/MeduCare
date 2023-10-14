const doctorRoutes = require('./routes/doctorRoutes');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
//configure env
dotenv.config();

app.use(cors());
app.use(express.json());

//routes
app.use('/api/doctorRoute', doctorRoutes);

//config database
connectDB();

//PORT
const PORT = process.env.PORT || 8080;

// routes
app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
    console.log(`MeduCare Running on port ${PORT}`);
});