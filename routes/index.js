import { Router } from "express";
import drawingsRoutes from './drawings.js'
import usersRoutes from "./users.js"

const router = Router();

router.get("/", (req, res) => res.send("This is the API root"))
router.use("/", usersRoutes);
router.use("/", drawingsRoutes);

export default router;