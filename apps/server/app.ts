import express from "express";
import authRoutes from "./api/v1/auth/auth.routes"
import executionRoutes from "./api/v1/execution/execution.routes"
import workflowRoutes from "./api/v1/workflow/workflow.routes"

const app = express();

app.get('/health', (_req, res) => {
    res.send("OK");
})

export default app;