import Express from "express";
import {
  getuserpost,
  createUserpost,
  updateUserPost,
  deleteUserpost,
} from "../../controllers/PostController.js";

const UserPostRouter = Express.Router();
UserPostRouter.get("/read", getuserpost);
UserPostRouter.post("/create", createUserpost);
UserPostRouter.patch("/update/:id", updateUserPost);
UserPostRouter.delete("/delete/:id", deleteUserpost);

export default UserPostRouter;
