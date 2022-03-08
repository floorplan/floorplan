const fs = require("fs");
const crypto = require("crypto");
const accessJson = require("../firebaseAccess.json");

fs.writeFileSync(
  "./.env",
  `
SESSION_SECRET="${crypto.randomBytes(64).toString("hex")}"
FIREBASE_PROJECT_ID="${accessJson.project_id}"
FIREBASE_PRIVATE_KEY_BASE64="${Buffer.from(accessJson.private_key).toString(
    "base64"
  )}"
FIREBASE_CLIENT_EMAIL="${accessJson.client_email}"
`,
  (err) => {
    if (err) throw err;
    console.log("The .env file has been saved!");
  }
);
