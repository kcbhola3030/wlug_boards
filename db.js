const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test')
const con  = mongoose.connection
con.on('open',()=>{
    try {
        console.log("connected db");
    } catch (error) {
        console.log(error)
    }
})
