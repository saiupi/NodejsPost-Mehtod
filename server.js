const express = require('express')
const app = express();

const mongoose = require('mongoose');
const bodyParser = require('body-parser')

const router = require('./routes/userRoute');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended: true
}))
app.use('/api/services', router);

mongoose.connect("mongodb://localhost:27017/test", {useNewUrlParser: true, useUnifiedTopology: true}).then((res)=>{
        app.listen(3000,()=>{
            console.log("db is connected");
          console.log("server is listening on 3000")
        })
})
