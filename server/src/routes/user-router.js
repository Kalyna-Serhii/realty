import express from "express";
import userController from "../controllers/user-controller.js";

const router = express.Router();

router.get("/users", userController.getUsers);
router.get("/user/:id", userController.getUserById);
router.post("/user", userController.createUser);
router.patch("/user/:id", userController.updateUser);
router.delete("/user/:id", userController.deleteUser);

export default router;