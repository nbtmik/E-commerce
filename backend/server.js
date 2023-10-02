const app = require("./app"); // importing app from app.js
const dotenv= require("dotenv");
const connectDatabase=require("./config/database");

//Handling  Uncaught Exception
process.on("uncaughtException",(err)=>{
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to uncaught Exception`);
    process.exit(1);
});

//config
dotenv.config({path:"backend/config/config.env"});//address of config file

//connecting to database
connectDatabase()

const server = app.listen(process.env.PORT,function(){
    console.log(`Server is working on : ${process.env.PORT}`);
});

//Unhandled Promise Rejection
process.on("unhandledRejection",err=>{ // when any issue hapeen in server for example if mondodb port will change due to some issue
    console.log(`Error:${err.message}`);
    console.log(`Shutting down the server due to Unhandled Promise Rejection`);
    server.close(()=>{ //server will be closed
        process.exit(1); //should be get exited from the process
    })
})