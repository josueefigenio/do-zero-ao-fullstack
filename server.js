const express = require('express');
const bodyParser =  require('body-parser');
require('dotenv').config();

const api = require('./backend/routes');

const app = express();

app.use(bodyParser.json());

app.use('/api', api);

if(process.env.NODE_ENV === 'production'){
    // Express vai entregar os assets de produção 
    // Comno por exemplo: main.js ou  main.css
    app.use(express.static('frontend/build'));


    // Express vai entregar o index.html. se nao reconhecer a rota
    const path = require('path')
    app.get('*',(req, res) => {
        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
}

const port = process.env.PORT;
app.listen(port)

console.log("Server initialize ...")
