const Portfolio = require("../models/Portfolio")
const getAboutInfo = async (ctx) => {
  try {
    const data = await Portfolio.getAboutInfo(ctx.params.id);
    ctx.response.ok("About Info Fetched", data);
  } catch (err) {
    ctx.response.fail("About Details Fetch Failed", err);
  }
};
const scanProjects = async (ctx) => {
  try {
    const data = await Portfolio.scanProjects();
    ctx.response.ok("Projects Info Fetched", data);
  } catch (error) {
    ctx.response.fail("Projects Details Fetch Failed", error);
  }
};
const createContact = async (ctx) => {
  try {
    const contact = ctx.request.body;
    await Portfolio.createContact(contact);
    ctx.response.ok("Contact creation Success");
  } catch (error) {
    ctx.response.fail("Contact creation  Failed", error);
  }
};
module.exports = {
  getAboutInfo,
  scanProjects,
  createContact
}