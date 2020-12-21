const express = require('express') // upload express module
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://binaryyoung:1234@boilerplate.qaczi.mongodb.net/<dbname>?retryWrites=true&w=majority', {
useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: true
}).then(() => console.log('MongoDB Connected....'))
.catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})