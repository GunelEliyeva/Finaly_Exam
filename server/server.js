const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const {Schema}=mongoose;

const productSchema=new Schema({
    img:{type:String, require:true},
    marca:{type:String, require:true},
    name:{type:String, require:true},
    price:{type:Number, require:true},

})

const Products=mongoose.model("product", productSchema);

const app = express();
const port = 8080;
app.use(cors())
app.use(bodyParser.json())


app.get('/product', (req, res) => {
    Products.find({}, (err, docs)=>{
        if(!err){
            res.send(docs)
        }else{
            res.status(500).json({message:err})
        }
    })
})
app.get('/product/:id', (req, res) => {
    const {id}=req.params;
    Products.findById(id, (err, docs)=>{
       if(!err){
        if(docs){
            res.send(docs)
            res.status(200);
        }else{
            res.status(404).json({message:"NOT_FOUND"})
        }
       }else{
        res.status(500).json({message:err})
       }
    })
})


app.delete('/product/:id', (req, res) => {
    const {id}=req.params;

    Products.findByIdAndDelete(id, (err)=>{
        if(!err){
            res.send({message:"SUCCESS DELETE"})
        }
        else{
            res.status(404).json({message:err})
        }
    })
})

app.post('/product', (req, res) => {
    let products=new Products({
        img:req.body.img,
        marca:req.body.marca,
        name:req.body.name,
        price:req.body.price,
    })
    products.save();
    res.send("SUCCESS")
    
})



mongoose.connect("mongodb+srv://aliyevag:aliyevag@cluster0.4mvfi79.mongodb.net/?retryWrites=true&w=majority", (err)=>{
    if(!err){

        app.listen(port, () => {
          console.log(`Example app listening on port ${port}`)
        })
    }
})