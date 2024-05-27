const Koa = require("koa");
const { koaBody } = require("koa-body");
const router = require("./router");
const cors = require('@koa/cors');
const responseHandler = require("./handler/responseHandler");

const app = new Koa();

app.use(koaBody());
app.use(cors());
app.use(responseHandler());
app.use(router.routes());
app.use(router.allowedMethods());

app.listen(8088, () => {
  console.log("Server is running on http://localhost:8088");
});
