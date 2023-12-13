import express from "express";
import { deleteUser } from "../controls/user.control.js";

const router = express.Router();

router.delete("/delete:id", deleteUser);

export default router;
