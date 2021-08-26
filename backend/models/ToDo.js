const mongoose = require('mongoose')

const toDoSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "Text is required"]
    },
    description: {
        type: String,
        required: false
    }
})

const ToDo = mongoose.model("ToDo", toDoSchema);

module.exports = ToDo