const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todoCollection : [{caption:String,isCompleted:Boolean}],
})


const Todos = mongoose.model('Todos', TodoSchema);

module.exports = Todos;