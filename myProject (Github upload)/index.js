const express = require('express');
const app = express()
const path = require('path');
// const mongoose = require('mongoose');
// const methodOverride = require('method-override');

// const marketPlace = require('./models/marketplace')

// mongoose.connect('mongodb://localhost:27017/sneedFeedSeed', {useNewUrlParser: true, useUnifiedTopology: true})
// .then(() => {
//     console.log("CONNECTION ESTABLISHED!")
// })
// .catch(err => {
//     console.log('*IN JOSEPH JOESTARS VOICE* OH NO!!')
//     console.log(err)
// })


app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '/public')))
// app.use(methodOverride('_method'))
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))



//Front Page
app.get('/', (req, res) =>{
    res.render('valm')
});

// Something else
app.get('/rexx', (req, res) =>{
    res.render('rexx')
});

app.get('/marl', (req, res) =>{
    res.render('marl')
});

// app.get('', async (req, res)=>{
//     const {} = req.params;
//      const data = await PH;
//     res.render('', {  })
// });


app.get('/timmeh', (req, res) =>{
    res.render('timmeh', {})
});




app.listen(1313, () =>{
    console.log("NOW LISTENING ON PORT UWU!")
});