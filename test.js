const express = require('express')
const app = express()
const port = 5000

app.get('/', (req, res) => res.send('Hello !'));
app.get('/person', (req, res, next) => res.json(["Tony","Lisa","Michael"]));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
