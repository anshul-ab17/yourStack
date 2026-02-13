import { Router } from "express";
import { WorkflowController } from "./workflow.controller";
import { authMiddleware } from "../middlewares/auth.middleware";

const router = Router();
const controller = new WorkflowController();

router.post("/", authMiddleware, controller.create);
router.get("/", authMiddleware, controller.getAll);
router.get("/:id", authMiddleware, controller.getOne);
router.put("/:id", authMiddleware, controller.update);
router.delete("/:id", authMiddleware, controller.delete);

export default router;