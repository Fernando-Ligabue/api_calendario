const express = require('express');
const mongoose = require('mongoose');
const apiRoutes = require('./routes/api.js');
const app = express();
const port = 8001;


mongoose.connect('mongodb://localhost:27017/API_Calendar', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', apiRoutes);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})