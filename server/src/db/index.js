const mongoose = require("mongoose");
MONGODB_URI='mongodb+srv://shivamkumar1352002:SkChJz12n76ViqIW@cluster0.xyg6bzg.mongodb.net/Notes';
mongoose
.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log("Database connected successfully!")
}).catch((error)=>{
    console.log("Error in connecting Database!",error);
})