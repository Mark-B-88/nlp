const dotenv = require('dotenv')
dotenv.config()

const cors = require('cors')
const path = require('path')
const fetch = require('node-fetch')
const bodyParser = require('body-parser')
const validator = require('validator')
const requestType = 'txt'
const express = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(express.static('dist'))

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
})

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log(`Listing on port: ${PORT}`);
})

app.post('/userData', async(req, res) => {
    if (validator.isURL(req.body.input)) {
        requestType = 'url';
    }

    const resp = await fetch(`https://api.meaningcloud.com/sentiment-2.1?key=${process.env.API_KEY}&lang=auto&${requestType}=${req.body.input}`);  
    try {
        const data = await resp.json();
        res.send(data);
    } catch(error) {
        console.log("error", error);
    }
})