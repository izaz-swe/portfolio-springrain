const Router = require("koa-router");
const { getAboutInfo, scanProjects, createContact } = require("./controllers/portfolio");


const router = new  Router();
router.get("/about/:id", getAboutInfo);
router.get("/projects", scanProjects)
router.post("/contact", createContact)
module.exports = router;