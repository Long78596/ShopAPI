const mongoose=require("mongoose");
const config= require("config");
module.exports =()=> {
    mongoose.connect(config.get("db.uri"))
    .then(()=>console.log("Connected"));
    return mongoose;
};
