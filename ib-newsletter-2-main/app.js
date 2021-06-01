const express = require('express');
const app = express();

const dotenv = require('dotenv');

app.set('view engine', 'ejs')
app.use(express.static(__dirname + '/assets'))

dotenv.config();

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/single', (req, res) => {
    res.render('single')
})

app.get('/ah', (req, res) => {
    res.render('AH')
})

app.get('/cd', (req, res) => {
    res.render('CD')
})

app.get('/se', (req, res) => {
    res.render('SE')
})

app.listen(process.env.PORT, () => {
    console.log('Newsletter 2 server is running...')
})