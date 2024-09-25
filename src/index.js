const dotevn = require('dotenv')
const path = require('path')
const app = require("./app")
dotevn.config({path: path.join(__dirname, "..", ".env")});
require('./databases/database').Connectdatabase()


app.listen(process.env.PORT, ()=>{
    console.log(`server is running on this port ${process.env.PORT}`);
})