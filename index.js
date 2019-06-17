const express = require('express');
const app = express();
const parser = require('body-parser').urlencoded({ extended: false });
app.use(parser)
const singerRouter = require('./controllers/singer.router');
app.set('view engine','ejs');
app.use('/', singerRouter);

app.listen(3000);