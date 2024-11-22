import { Router } from "express";
import { checkUserAuth } from "../../middlewares/auth.js";
import { Login, Logout, Signup } from "../../controller/usercontroller.js";

const router = Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.post("/login", Logout);

export default router;
