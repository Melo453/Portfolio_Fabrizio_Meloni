const express = require('express');
const { use } = require('express/lib/application');
const app = express();
const path = require('path');


app.use(express.static(path.join(__dirname, 'public'))); 

app.set("views", __dirname + './views');
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

const router = require('./routes/router')
app.use(router.routes)


const PORT = 2500;
console.log(__dirname)
app.listen(PORT)
console.log( `server running on port ${PORT}`);

