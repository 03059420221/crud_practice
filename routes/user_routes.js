import express from "express";
import { createUser, deleteUser, getdata, update } from "../controller/user_controller.js";


const route= express.Router();

route.get("/fetch",getdata);
route.post("/createdata",createUser);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;