require('dotenv').config();
const accessKeyId = process.env.ACCESS_KEY_ID;
const endpoint = process.env.ENDPOINT
const region = process.env.REGION
const secretAccessKey = process.env.SECRET_ACCESS_KEY

module.exports = {
  accessKeyId,
  endpoint,
  region,
  secretAccessKey
}