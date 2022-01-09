'use strict';
const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileRoutes = require('./routes/file-upload-routes');
const userRoutes = require('./routes/user');

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
const orgsRouter = require('./routes/organization');


app.use('/profiles', profilesRouter);
app.use('/notes', notesRouter);
app.use('/org', orgsRouter);
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/api', fileRoutes.routes);
app.use('/user',userRoutes.routes);
app.use(bodyParser.json());


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});