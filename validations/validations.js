import { body } from "express-validator";

export const loginValidator = [
  body("email", "Incorrect email").isEmail(),
  body("password", "The password must contain at least 5 characters").isLength({
    min: 5,
  }),
];

export const registerValidator = [
  body("email", "Incorrect email").isEmail(),
  body("password", "The password must contain at least 5 characters").isLength({
    min: 5,
  }),
  body("fullName", "Write your name").isLength({ min: 3 }),
  body("avatarUrl", "Incorrect avatar link").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter post title").isLength({ min: 3 }).isString(),
  body("text", "Enter text post").isLength({ min: 10 }).isString(),
  body("tags", "Incorrect format tags *specify an array*")
    .optional()
    .isString(),
  body("imageUrl", "Incorrect image link").optional().isString(),
];
