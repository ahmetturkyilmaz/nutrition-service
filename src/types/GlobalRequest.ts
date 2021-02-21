import {NextFunction, Request, Response} from "express";

export interface GlobalRequest extends Request{
    user:string
}
