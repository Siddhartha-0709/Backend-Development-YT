import express from "express";
import cors from "cors";
import userRoutes from "./routes/user.routes.js";
import todoRoutes from "./routes/todo.routes.js";

//App initialization
const app = express();

//Middleware Setup
app.use(cors({
    origin: "*"
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Routes Middleware Setup
app.use('/api/v1/user', userRoutes);
app.use('/api/v1/todo', todoRoutes);
app.get('/',(request, response)=>{
    response.send("Hello from TodoList Server");
})

export default app