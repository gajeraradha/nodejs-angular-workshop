const express=require('express')
const app=express()
const port=4000

app.get('/',(req,res)=>
{
    res.send('HELLO WORLD!')
})
app.get('/about',(req,res)=>
{
    res.send('About')
})
app.get('/contact',(req,res)=>
{
    res.send('123456')
})
app.listen(port,()=>
{
    console.log(`Example app listening at http://localhost:${port}`);
})