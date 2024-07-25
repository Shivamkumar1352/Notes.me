require('dotenv').config;
require('./db')

const cors = require('cors')

const express = require('express');
const app = express();

const PORT = 3001;

app.use(cors());
app.use(express.json());

const userRouter = require('./routers/users.router');
const authRouter = require('./routers/auth.router');
const notesRouter = require('./routers/notes.router');

app.get('/',(req, res)=>{
    res.send("hello");
});

app.use('/api/notes',notesRouter);
app.use('/api/auth',authRouter);
app.use('/api/users',userRouter);


app.listen(PORT,()=>{
    console.log("server is running on 3001 port")
});
