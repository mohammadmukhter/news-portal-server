const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");


app.use(cors());

app.get("/", (req, res)=>{
    res.send('connected successfully');
});

app.get("/categories", (req, res)=>{
    res.send(categories);
})

app.get("/categories/:id", (req,res)=>{
    const categoryId = req.params.id;
    
    if(categoryId == 0){
        res.send(news)
    }else{
        const filteredData= news.filter(data => data.category_id === categoryId)
        res.send(filteredData)
    }
    

})

app.get("/news/:id", (req, res)=>{
    const newsId = req.params.id;
    const matchedData = news.find(x => x._id === newsId);
    if(matchedData){
        res.send(matchedData)
    }else{
        res.send("NO NEWS FOUND!")
    }
    
})

// listener
app.listen(port, ()=>{
    console.log('connected successfully ', port)
})