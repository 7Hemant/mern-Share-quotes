import Express from "express";
import { body } from "express-validator";
import { registerUser, loginUser } from "../../controllers/UserController.js";

const userAuth = Express.Router();

userAuth.post(
  "/register",
  [
    body("name").trim().isString(),
    body("email").trim().isEmail(),
    body("password").trim().isLength({ min: 6 }),
  ],
  registerUser
);
userAuth.post("/login", loginUser);

export default userAuth;
