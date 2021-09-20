const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./config/db.conn');
const routes = require('./router/data.router');
app.use(express.json());
db();

app.use('/api/users/', routes);

app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});