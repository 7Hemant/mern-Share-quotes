import Express from "express";
import { registerUser, loginUser } from "../../controllers/UserController.js";

const userAuth = Express.Router();

userAuth.post("/register", registerUser);
userAuth.post("/login", loginUser);

export default userAuth;
