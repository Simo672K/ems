import express from "express";

const app = express();
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

app.use(loggerMiddleware);
app.get("/", (req, res) => {
  res.send("<h1>hello there!</h1>");
});

app.listen(3000, () => {
  console.log("[*] App running on port :3000...");
});
