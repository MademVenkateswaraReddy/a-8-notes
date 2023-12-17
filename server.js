require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const useRouter = require('./routes/useRouter')
const noteRouter = require('./routes/noteRouter')

const app = express();
app.use(express.json());
app.use(cors());

app.use('/users', useRouter)
app.use('/api/notes', noteRouter)

const PORT = process.env.PORT;

const URI = process.env.MONGODB_URL

const startServer = async () => {
  try {
    await mongoose.connect(URI);

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
};

startServer();
