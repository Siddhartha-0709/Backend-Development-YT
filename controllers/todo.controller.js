import todoModel from "../models/todo.model.js";


// Function to Create Todo
const createTodo = async(request, response)=>{
  try {
    const {title, description, userEmail} = request.body;
    const todo = new todoModel ({title, description, userEmail});
    await todo.save();
    response.send({message: "Todo created successfully"}).status(201);
  } catch (error) {
    console.log(error);
    response.send({message: "Something went wrong while creating Todo"}).status(500);
  }  
}
// Function to Read all the Todo of a Particular User
const readUserTodo = async (request, response)=>{
    try {
        const {userEmail} = request.body;
        const todos = await todoModel.find({userEmail});
        response.send(todos).status(200);
    } catch (error) {
        console.log(error);
        response.send({message: "Something went wrong while reading Todo"}).status(500);
    }
}
// Function to Update Todo
const updateTodoStatus = async (request, response)=> {
    try {
        const {id} = request.query;
        const todo = await todoModel.findByIdAndUpdate(id, {status: true});
        console.log(todo);
        response.send({message: "Todo updated successfully"}).status(200);
    } catch (error) {
        console.log(error);
        response.send({message: "Something went wrong while updating Todo"}).status(500);
    }
}
// Function to Delete Todo
const deleteTodo = async (request, response)=>{
    try {
        const {id} = request.query;
        const todo = await todoModel.findByIdAndDelete(id);
        console.log(todo);
        response.send({message: "Todo deleted successfully"}).status(200);
    } catch (error) {
        
    }
}


export {createTodo, readUserTodo, updateTodoStatus, deleteTodo}