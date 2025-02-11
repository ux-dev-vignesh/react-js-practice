import express from 'express';
import cors from "cors";
const app=express();
const port=5000;

// middleware to pass jason request
app.use(express.json());

app.use(cors());

// sample route
app.get('/api/items',(req,res)=>{
    res.json([{ id: 1, name: 'shirt' }, { id: 2, name: 'tshirts' }])
})


// run server
app.listen(port,()=>{
    console.log(`server running on http://localhost:${port}`);
})