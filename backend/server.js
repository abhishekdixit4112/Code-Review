require('dotenv').config();
const app=require('./src/app');

const PORT = process.env.PORT || 3000;

app.listen(3000,()=>{
    console.log("server is running on http://localhost:3000");
})