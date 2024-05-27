const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");
const { DynamoDBDocumentClient, GetCommand, ScanCommand, PutCommand } = require("@aws-sdk/lib-dynamodb");
const {
  region,
  endpoint,
  accessKeyId,
  secretAccessKey,
} = require("../configure/variable");

const client = new DynamoDBClient({
  region: region, // Replace "your-region" with the AWS region where your DynamoDB table is located (e.g., "us-east-1")
  credentials: {
    accessKeyId: accessKeyId, // Replace "your-access-key-id" with your AWS access key ID
    secretAccessKey: secretAccessKey, // Replace "your-secret-access-key" with your AWS secret access key
  },
  endpoint: endpoint,
});
const docClient = DynamoDBDocumentClient.from(client);

const getAboutInfo = async (id) => {
  const command = new GetCommand({
    TableName: "about",
    Key: {
      key: id,
    },
  });
  const response = await docClient.send(command);
  return response.Item;
};
const createContact = async (contact) => {
  const command = new PutCommand({
    TableName: "contacts",
    Item: {
      email: contact.email,
      name: contact.name,
      message: contact.message
    },
  });
  await docClient.send(command);
};

const scanProjects = async () => {
  const command = new ScanCommand({
    ProjectionExpression: "#id, description, title, imageUrl",
    ExpressionAttributeNames: { "#id": "id" },
    TableName: "projects",
  });

  const response = await docClient.send(command);
  return response.Items;
};



module.exports = {
  getAboutInfo,
  createContact,
  scanProjects,
};
