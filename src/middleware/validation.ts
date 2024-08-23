import {body, validationResult} from 'express-validator';
import { Request, Response, NextFunction } from 'express';

const handleValidationErrors = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }
    next();
}

export const validateMyUserRequest = [
    body("name").isString().notEmpty().withMessage("Nombre debe ser una cadena"),
    body("addressline1")
    .isString()
    .notEmpty()
    .withMessage("Direccion debe ser de tipo cadena"),
    body("city").isString().notEmpty().withMessage("Ciudad debe ser una cadena"),
    body("country").isString().notEmpty().withMessage("Pais debe ser una cadena"),
    handleValidationErrors,
]