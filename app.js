const express = require("express")
const morgan = require("morgan")
const dotenv = require("dotenv")
const app = express()

const port = process.env.PORT || 5400

app.listen(port,()=>{
    console.log(`server is listening at port ${port}`);
})