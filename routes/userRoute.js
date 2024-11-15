import express from "express";
import {
  loginUser,
  registerUser,
  adminLogin,
  deleteUser,
  updateUser,
} from "../controllers/userController.js";

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/admin", adminLogin);
userRouter.delete("/:email", deleteUser);
userRouter.put("/:email", updateUser); 

export default userRouter;
