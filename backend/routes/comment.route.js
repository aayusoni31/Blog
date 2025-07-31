//Defines comment-related API endpoints (currently only /comments/anothertest).
import express from "express";
const router = express.Router();
router.get("/anothertest", (req, res) => {
  res.status(200).send("user route");
});
export default router;
