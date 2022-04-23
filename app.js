const express = require('express');
const app = express();
const path = require('path');


app.set('port', (process.env.PORT || 2500));
app.use(express.static(path.join(__dirname, 'public'))); 

/*Glide js*/ 
app.use("/css", express.static(__dirname + "/node_modules/@glidejs/glide/dist/css"));
app.use("/dist", express.static(__dirname + "/node_modules/@glidejs/glide/dist"));

app.set("views", __dirname + '/views');
app.set("view engine", "ejs");
app.engine('html', require('ejs').renderFile);

const router = require('./routes/router')
app.use(router.routes)

app.listen(app.get('port'), () => {
    console.log( `server running on port ${app.get('port')}`);
})


