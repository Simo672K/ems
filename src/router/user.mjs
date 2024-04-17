import { Router } from "express";

const router = Router();

router.get("/api/users", (req, res) => {
  console.log(req.session.id);
  res.send({ msg: "hello" });
});

export default router;
