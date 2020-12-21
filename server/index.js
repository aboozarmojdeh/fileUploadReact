const express=require('express');
const cors=require('cors');

const app=express();

app.use(express.json());
app.use(cors());

//Routes
app.get('/',(req,res)=>{
    console.log(req.body)
    res.json(req.body)
})

app.listen(5000,()=>{
    console.log('Server is listening to PORT 5000')
})