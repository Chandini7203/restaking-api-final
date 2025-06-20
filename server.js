const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const PORT = process.env.PORT || 5000;


const app = express();
app.use(express.json());

// Routes
app.use('/restakers', require('./routes/restakers'));
app.use('/validators', require('./routes/validators'));
app.use('/rewards', require('./routes/rewards'));

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.listen(PORT, () => {
  console.log('\x1b[36m%s\x1b[0m', `🚀 Server running on port ${PORT}`);
  console.log('\x1b[32m%s\x1b[0m', `🔗 http://localhost:${PORT}/restakers`);
  console.log('\x1b[32m%s\x1b[0m', `🔗 http://localhost:${PORT}/validators`);
  console.log('\x1b[32m%s\x1b[0m', `🔗 http://localhost:${PORT}/rewards/0xABC123`);
  console.log('\x1b[90m%s\x1b[0m', `💡 CTRL+Click any link to open in browser`);
});
