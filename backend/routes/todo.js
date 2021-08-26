const express = require('express')
const { GetAllToDos, CreateToDo, DeleteToDo } = require('../controllers/ToDoController')
const Router = express.Router()

Router.route('/')
.get(GetAllToDos)
.post(CreateToDo);



Router.route("/:id")
.get(GetToDoByID)
.patch(UpdateToDo)
.delete(DeleteToDo)

module.exports = Router;