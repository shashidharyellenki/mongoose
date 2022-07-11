const mongoose = require('mongoose')
async function main() {
    await mongoose.connect('mongodb+srv://shashidhar:shashidhar@natours.ahjic.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true ,  useUnifiedTopology: true});
}
main().catch(err => console.log(err));
const express = require('express');

const app = express();

const tasks = require('./routes/tasks');

// middleware
app.use(express.json()) 
 


app.use('/api/v1/tasks', tasks);

// server
const port=3000;
app.listen(port, console.log("Server is running"))

