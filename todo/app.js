const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

//DB config
const db = require('./config/keys').MongoURI;
//Todo Model
const Todomodel = require('./models/Todomodel');
const { json } = require('body-parser');

//Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
.then(()=> console.log('MongoDB Connected...'))
.catch(err=> console.log(err))


app.use(cors());

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Routes
app.get('/fetchTodos',(req, res) =>{
    console.log('aa gya');
    Todomodel.find((err,found) =>{
        res.send({list:found[0].todoCollection})
    })
   
})

app.post('/addTodo', (req, res) =>{
    console.log(req.body.data);
    if(req.body.data.caption==''){
        res.status(417).send({
            message: 'Empty Field cannot be added'
        })
    }
    else{
   Todomodel.find((err,found) =>{
    
       var obj = { caption:req.body.data.caption, isCompleted: false };
       found[0].todoCollection.push(obj);
       found[0].save((err,update)=>{
           if(err){
               console.log(err);
           }
           else{
               console.log('Updated')
               res.send({newTodoAdded:obj});
           }
       })

   })
}

})

app.post('/delTodo', (req, res) =>{
    console.log('Request to delete');
    console.log(req.body.id);
    Todomodel.find( (err, found) =>{
        found[0].todoCollection.splice(req.body.id,1);
                found[0].save((err,update)=>{
            if(err){
                console.log(err);
            }
            else{
                console.log('Deleted');
                res.send({list:found[0].todoCollection});
            }
        })
    });
    
});

app.post('/togTodo', (req, res) => {
    console.log('Request to toggle todo');
    Todomodel.find((err, found) => {
        found[0].todoCollection[req.body.id].isCompleted = !found[0].todoCollection[req.body.id].isCompleted;
        found[0].save((err, update) => {
            if(err){
                console.log(err);
            }
            else{
                console.log('toggled');
                res.send({toggledTodo: found[0].todoCollection});
            }
        })
    });
});



const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on port ${PORT}`));