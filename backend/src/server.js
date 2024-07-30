const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const printerRoutes = require('./routes/printers');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/3eraDim', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/printers', printerRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
