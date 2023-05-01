import express from "express";
import mongoose from "mongoose";
import {
  loginValidator,
  postCreateValidation,
  registerValidator,
} from "./validations/validations.js";
import checkAuth from "./utils/checkAuth.js";
import * as UserController from "./controllers/UserController.js";
import * as PostController from "./controllers/PostController.js";

mongoose
  .connect(
    "mongodb+srv://yaromahobAD:KgdRrSjnkH9X9Ybj@clusterishe.2n3kzy0.mongodb.net/blog?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("DB OK");
  })
  .catch((err) => {
    console.log("DB error", err);
  });

const app = express();

app.use(express.json());

app.post("/auth/register", registerValidator, UserController.register);

app.post("/auth/login", loginValidator, UserController.login);

app.get("/auth/me", checkAuth, UserController.authMe);

app.get("/posts", PostController.getAll);
// app.get("/posts/:id", checkAuth, PostController.getOne);
app.post("/posts", checkAuth, postCreateValidation, PostController.create);
// app.delete("/posts/:id", checkAuth, PostController.remove);
// app.patch("/posts/:id", checkAuth, PostController.update);

app.listen(4444, (err) => {
  if (err) console.log(err);
  console.log("server OK");
});
