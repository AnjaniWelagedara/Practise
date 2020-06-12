
const express = require('express');

const mongoose = require('mongoose');
const cors = require("cors");



const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/Railway').then(() => {
    console.log('Connected to the DB');
}).catch(err => {
    console.error(err);
    process.exit(-1);
});

const userRouter = require("./routes/users");
app.use('/users',userRouter);

const adminRouter = require('./routes/admins');
app.use('/admins',adminRouter);


app.listen(3000, err => {
    if (err) {
        console.error(err);
        return;
    }

    console.log('Application is running on port 3000');
});

