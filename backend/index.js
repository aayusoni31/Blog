import express from "express";
import dotenv from "dotenv";
import connectDB from "./lib/connectDB.js";
import userRouter from "./routes/user.route.js";
import postRouter from "./routes/post.route.js";
import commentRouter from "./routes/comment.route.js";
import webhookRouter from "./routes/webhook.route.js";

dotenv.config();
const app = express();
app.use("/webhooks", webhookRouter);
app.use(express.json());
app.use("/users", userRouter);
app.use("/posts", postRouter);
app.use("/comments", commentRouter);

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    message: error.message || "Internal Server Error",
    status: error.status || 500,
    stack: error.stack,
  });
});
app.listen(3000, () => {
  connectDB();
  console.log("Server is running!");
});
