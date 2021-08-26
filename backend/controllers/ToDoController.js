const ToDo = require('../models/ToDo')

exports.GetAllToDos = GetAllToDos = async (request, response) => {
    try {
        let allToDo = await ToDo.find({})
        response.status(200).json({
            status: "success",
            data: allToDo,
        });
    } catch (err) {
        response.status(400).json({
            status: "failed",
            msg: "GET ALL TODOS ERROR"
        })
    }
};

exports.CreateToDo = CreateToDo = async (request, response) => {
    try {
        let new_todo = request.body;
        let todo = await ToDo.create(new_todo);
        response.status(200).json({
            status: "success",
            data: todo,
        });
    } catch (err) {
        response.status(400).json({
            status: "failed",
            msg: "CREATE TODO ERROR"
    })
}
};

exports.GetToDoByID = GetToDoByID = async (request, response) => {
    try {
        let request_id = request.params.id
        let todo = await ToDo.findById(request_id)
        if (!todo){
            response.status(404).json({
                status: "failed",
                msg: "not found"
        })
        }else {
        
        response.status(200).json({
            status: "success",
            data: todo
        })}

    } catch (err) {
        response.status(400).json({
            status: "failed",
            msg: "GET TODO BY ID ERROR"
    })
}
};

exports.UpdateToDo = UpdateToDo = async (request, response) => {
    try {
        let request_id = request.params.id
        let new_todo = request.body
        let todo = await ToDo.findByIdAndUpdate(request_id, new_todo, { new: true })
        response.status(200).json({
            status: "success",
            data: todo
        })
    } catch (err) {
        response.status(400).json({
            status: "failed",
            msg: "UPDATE TODOS ERROR"
    })
}
};

exports.DeleteToDo = DeleteToDo = async (request, response) => {
    try {
        let request_id = request.params.id
        await ToDo.findByIdAndDelete(request_id)
        response.status(200).json({
            status: "success",
            })
    } catch (err) {
        response.status(400).json({
            status: "failed",
            msg: "DELETE TODOS ERROR"
    })
}
};