import { Router } from "express";
import { checkUserAuth } from "../../middlewares/auth.js";


const router = Router();

// router.post("/create-course", checkUserAuth, createUserTask);
// router.post("/delete-course", checkUserAuth, deleteUserTask);
// router.post("/course-complete", checkUserAuth, taskComplete)
export default router;
