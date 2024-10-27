import {Router} from "express";
import {createTodo, readUserTodo, updateTodoStatus, deleteTodo} from "../controllers/todo.controller.js";

const router = Router();

router.route("/create").post(createTodo);
router.route("/readbyuser").post(readUserTodo);
router.route("/update").get(updateTodoStatus);
router.route("/delete").get(deleteTodo);

export default router;