import { Router } from "express";
import userRoutes from "./userRoutes.js";
import courseRoutes from "./courseRoutes.js";

const router = Router();

router.use("/user", userRoutes);
router.use("/course", courseRoutes);

export default router;
