const mongoose = require("mongoose");
mongoose
.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database connected successfully!")
}).catch((error)=>{
    console.log("Error in connecting Database!",error);
})
