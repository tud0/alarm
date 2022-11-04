const express = require("express");
const bodyParser = require("body-parser");
const database = require("./config/database");
const session = require("express-session");
const FileStore = require("session-file-store")(session);
const cookieParser = require("cookie-parser");
const app = express();

//라우터
const routes = require("./routes");

//pug뷰 엔진
app.set("view engine", "pug");
app.set("views", "views");

//db
database.db;

app.use(cookieParser());
app.use(
  session({
    secret: "admin",
    resave: false,
    saveUninitialized: true,
    store: new FileStore(),
    cookie: {
      httpOnly: true,
      secure: false,
    },
  })
);

app.use(routes);

app.listen(4000);
