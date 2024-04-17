import express from "express";
import routes from "./router/user.mjs";
import session from "express-session";
import cookieParser from "cookie-parser";

const app = express();
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
};

app.use(express.json());
app.use(cookieParser("anothertest"));
app.use(
  session({
    secret: "test123",
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 60000,
    },
  })
);

app.use(routes);
app.use(loggerMiddleware);
app.get("/", (req, res) => {
  console.log(req.session.id);
  req.session.visited = true;
  res.send("<h1>hello there!</h1>");
});

app.listen(3000, () => {
  console.log("[*] App running on port :3000...");
});
