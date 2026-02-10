import express from "express";
import authRoutes from "./auth/auth.routes"
import executionRoutes from "./execution/execution.routes"
import workflowRoutes from "./workflow/workflow.routes"

const app = express();
app.use(express.json());
app.get('/health', (_req, res) => {
    res.send("OK");
})
app.use('/api/v1/auth',authRoutes);
app.use('/api/v1/execution',executionRoutes);
app.use('/api/v1/workflow',workflowRoutes);

export default app;