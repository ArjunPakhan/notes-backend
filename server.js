const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const noteRoutes = require('./routes/noteRoutes');


dotenv.config();
connectDB();

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.get('/', (req, res) => res.send('API is running...'));
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
