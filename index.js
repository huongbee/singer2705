const express = require('express');
const app = express();
const singerRouter = require('./controllers/singer.router');
app.use('/', singerRouter);

app.listen(3000);