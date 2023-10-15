const doctorRoutes = require('./routes/doctorRoutes');
const express = require('express');
const app = express();
const cors = require('cors');
const dotenv = require("dotenv");
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const appointmentRoutes = require('./routes/appointmentRoutes');
//configure env
dotenv.config();

app.use(cors());
app.use(express.json());



//config database
connectDB();

//PORT
const PORT = process.env.PORT || 8080;

// routes
app.use('/api/auth', authRoutes);
app.use('/api/doctor', doctorRoutes);
app.use('/api/appointment', appointmentRoutes);

app.listen(PORT, () => {
    console.log(`MeduCare Running on port ${PORT}`);
});