const app=require("../apps/app");
const config=require("config");
const server =app.listen(port=config.get("app.port"),()=>{
    console.log(`Server on port ${port} `)

});