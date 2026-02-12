import crypto from "crypto";
import { executionClient } from "../../grpc/client";

type ExecutionStatus = "queued" | "running" | "completed" | "failed";

interface Execution {
  id: string;
  workflowId: string;
  status: ExecutionStatus;
  createdAt: Date;
}

const executions: Execution[] = [];

export const runWorkflow = async (workflowId: string): Promise<Execution> => {
  const executionId = crypto.randomUUID();

  const execution: Execution = {
    id: executionId,
    workflowId,
    status: "queued",
    createdAt: new Date(),
  };

  executions.push(execution);

  const request = {
    workflowId,
    executionId,
  };

  return new Promise((resolve, reject) => {
    executionClient.runWorkflow(request, (err: any) => {
      if (err) {
        execution.status = "failed";
        return reject(err);
      }

      execution.status = "running";
      resolve(execution);
    });
  });
};

export const getExecution = async (executionId: string) => {
  return executions.find(e => e.id === executionId);
};

export const listExecutions = async () => {
  return executions;
};