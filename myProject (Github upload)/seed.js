const mongoose = require('mongoose');
const marketPlace = require('./models/marketplace')

mongoose.connect('mongodb://localhost:27017/worldFarm', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log("CONNECTION ESTABLISHED!")
})
.catch(err => {
    console.log('*IN JOSEPH JOESTARS VOICE* OH NO!!')
    console.log(err)
})


