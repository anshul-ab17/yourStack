import type { Request, Response } from "express";
import * as authService from "./auth.service";

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await authService.signup(req.body);
    res.status(201).json(user);
  } catch (err: any) {
    res.status(400).json({ error: err.message });
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const token = await authService.signin(req.body);
    res.json({ token });
  } catch (err: any) {
    res.status(401).json({ error: err.message });
  }
};
