/*const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors= require('cors');

const app = express();

//import routes
const postRoutes = require('./routes/post');



//application middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);



const PORT = 8000;
const DB_URL='mongodb+srv://asini2000:asini2000@medicare.i5irh.mongodb.net/mernCrud?retryWrites=true&w=majority'


/*mongoose.connect(DB_URL)
.then(() =>{
    console.log('MongoDB Connected');
})
.catch((err) =>console.log('MongoDB Connection Error'))

app.listen(PORT,() =>{
    console.log(`App is running on ${PORT}`);
});*/

