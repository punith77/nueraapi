const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');





const server = express();
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(cors());


// Db Config
const db = require('./config/keys').mongoURI;
mongoose.connect(db).then(() => {
    console.log('MongoDB connected')
}).catch((err) => console.log(err))

// api routes
server.use('/api/contents', require('./api/contents'));



const port = process.env.PORT || 7000
server.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})