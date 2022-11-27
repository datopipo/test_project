const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes/routes')

mongoose.connect(
    'mongodb://127.0.0.1/node_auth',{
    useNewUrlParser: true,
    useUnifiedTopology: true
    },
    (err) => {
        if(err) console.log(err)
        else console.log("mongdb is connected");
    }
);

app = express()
app.use(cookieParser())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.use('/api', routes)

app.listen(8000)
