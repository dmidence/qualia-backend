const mongoose = require('mongoose');
const dbConection = async()=>{
    try {
        await mongoose.connect("mongodb+srv://qspaceuser:qspacepassword@cluster0.t3fhzkv.mongodb.net/qspace?authSource=admin&replicaSet=atlas-bkv4m8-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true",{useNewUrlParser:true, useUnifiedTopology:true});
        console.log('Conected to mongo cluster')
    } catch (error) {
        console.log(error)
    }
}

module.exports = { dbConection }