import { Router } from "express";
import * as executionController from "./executions.controller";

const router = Router();

router.post("/workflows/:workflowId/run", executionController.runWorkflow);
router.get("/:executionId", executionController.getExecution);
router.get("/", executionController.listExecutions);

export default router;