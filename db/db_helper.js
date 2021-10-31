const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/blog')
    .then(() => console.log("CONNECTION IS SUCCESSFULY TO DB !"))
    .catch(err => console.log(err));
