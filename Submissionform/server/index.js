const express = require('express');
const app=express();
const cors = require('cors');
const dbConn = require("./config/db.conn");
const homeRoutes = require("./routes/home.routes");
const port=process.env.PORT || 3000 ;
const corsOption={
    "origin":"*"
}
app.use(cors(corsOption));
app.use(express.json());
dbConn();
app.use('/api/home',homeRoutes);
app.listen(port,()=>{
    console.log(`Server started at port ${port}`);
});