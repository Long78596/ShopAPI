const express =require("express");
const app=express();
const config=require("config");
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(config.get("app.prefApiVersion"),require(`${__dirname}/../router/web`));
module.exports = app;
