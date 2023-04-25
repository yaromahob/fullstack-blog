import {body} from "express-validator";

export const registerValidator = [
  body('email', "Incorrect email").isEmail(),
  body('password', "The password must contain at least 5 characters").isLength({min: 5}),
  body('fullName', "Write your name").isLength({min: 3}),
  body('avatarUrl', 'Incorrect avatar link').optional().isURL()
];