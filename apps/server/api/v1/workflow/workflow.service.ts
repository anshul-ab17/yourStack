import { v4 as uuid } from "uuid";

interface Workflow {
  id: string;
  name: string;
  userId: string;
  nodes: any[];
}

const workflows: Workflow[] = [];

export class WorkflowService {
  async create(payload: any, userId: string) {
    const workflow: Workflow = {
      id: uuid(),
      name: payload.name,
      userId,
      nodes: payload.nodes || []
    };
    workflows.push(workflow);
    return workflow;
  }

  async getAll(userId: string) {
    return workflows.filter(w => w.userId === userId);
  }

  async getOne(id: string, userId: string) {
    const workflow = workflows.find(w => w.id === id && w.userId === userId);
    if (!workflow) throw new Error("Workflow not found");
    return workflow;
  }

  async update(id: string, payload: any, userId: string) {
    const workflow = workflows.find(w => w.id === id && w.userId === userId);
    if (!workflow) throw new Error("Workflow not found");

    workflow.name = payload.name ?? workflow.name;
    workflow.nodes = payload.nodes ?? workflow.nodes;

    return workflow;
  }

  async delete(id: string, userId: string) {
    const index = workflows.findIndex(w => w.id === id && w.userId === userId);
    if (index === -1) throw new Error("Workflow not found");
    workflows.splice(index, 1);
  }
}