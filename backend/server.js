const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const notesRouter = require('./routes/note');
const profilesRouter = require('./routes/profile');

app.use('/profiles', profilesRouter);
app.use('/notes', notesRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
