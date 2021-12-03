const express = require("express");
const dotenv = require("dotenv");
const routers = require("./routers/index");
const connectDatabase = require("./helpers/database/connectDatabase");
const customErrorHandler = require("./middlewares/errors/customErrorHandler");
dotenv.config({
    path: "./config/env/config.env"
});

const app = express();
const PORT =  process.env.PORT;
connectDatabase();
app.use("/api",routers)
// Error Handler
app.use(customErrorHandler);
app.listen(PORT,()=>{
    console.log(`App Started on ${PORT} : ${process.env.NODE_ENV}`);
});
