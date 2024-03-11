import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/userController.js";

const router = express.Router();

router.route("/getUsers").get(getUsers);

router.route("/createUser").post(createUser);

router.route("/updateUser/:id").put(updateUser);

router.route("/deleteUser/:id").delete(deleteUser);

export default router;
