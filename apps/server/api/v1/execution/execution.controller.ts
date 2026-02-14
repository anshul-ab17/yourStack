import { Request, Response } from "express";
import * as executionService from "./executions.service";

export const runWorkflow = async (req: Request, res: Response) => {
  try {
    const { workflowId } = req.params;
    const execution = await executionService.runWorkflow(workflowId);
    res.status(202).json(execution);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const getExecution = async (req: Request, res: Response) => {
  try {
    const execution = await executionService.getExecution(req.params.executionId);
    if (!execution) {
      return res.status(404).json({ error: "Execution not found" });
    }
    res.json(execution);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};

export const listExecutions = async (_req: Request, res: Response) => {
  try {
    const executions = await executionService.listExecutions();
    res.json(executions);
  } catch (err: any) {
    res.status(500).json({ error: err.message });
  }
};