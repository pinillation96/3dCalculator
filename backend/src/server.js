// src/server.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Correct import of connectDB

dotenv.config();

connectDB();

const app = express();

app.use(express.json());

const printerRoutes = require('./routes/printerRoutes');

app.use('/api/printers', printerRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
