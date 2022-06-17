import { NextFunction, Request, Response } from "express";
import { FailedUpdateError } from "../services/errors/failed-update.error";
import { NotFoundError } from "../services/errors/not-found.error";

function handleError(
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log(err);
    if (err instanceof NotFoundError) {        
        res.status(404).send(err.message);
    } else if (err instanceof FailedUpdateError){
        res.status(400).send(err.message);
    } else {
        res.status(500).send('Oh no, this is embarrasing. We are having troubles my friend');
    }

}

export default handleError;