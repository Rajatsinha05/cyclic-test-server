const express = require('express')
const app = express()


app.use(express.json())
app.get('/',(req,res)=>{

res.send("working fing")

})

app.post('/login',(req,res)=>{


res.send(req.body)

})

app.listen(3032,()=>{

    console.log("server is  workinh on port no 3032 ")
})