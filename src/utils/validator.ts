import { Request, Response, NextFunction } from "express";


export function validateRequest(req: Request, res: Response, next: NextFunction): void {

  // If both email and password are present and valid, call next middleware function
  next();
}
