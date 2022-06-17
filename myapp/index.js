const express = require('express')
const app = express()
const port = 3000

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://walden4u:ahffk131@boilerplate.lg1un.mongodb.net/?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('MongoDb Connected...')).catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요!');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})