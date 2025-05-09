// index.js
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoutes = require('./routes/userRoutes');

// 🛠️ Middleware to parse JSON should come BEFORE routes
app.use(express.json()); 

// Routes
app.use('/api', userRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/crudDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.log('❌ MongoDB Error:', err));

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
