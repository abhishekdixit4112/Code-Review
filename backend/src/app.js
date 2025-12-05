const express=require('express');
const aiRoutes=require("./routes/ai.routes")
const cors=require('cors')

const app=express();

app.use(cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST"],
}));

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('Radhe Radhe');
})
app.use('/ai',aiRoutes)

module.exports=app;