const express = require('express');
const app = express();
const cors = require('cors');



// Middleware
app.use(cors({
    origin: 'https://refnosfinder.azurewebsites.net', // Allow requests from your frontend
    credentials: true, // Include cookies in requests
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization"
  }));


app.use(express.json());

const referenceRoutes = require('./routes/referenceRoutes');

app.use('/api/v1/reference', referenceRoutes);

const path = require("path");

app.use(express.static(path.join(__dirname, "../frontend/build")));


app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../frontend/build', 'index.html'));
  });
  

module.exports = app;
