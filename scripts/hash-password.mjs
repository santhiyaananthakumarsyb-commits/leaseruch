import bcrypt from "bcryptjs";
import { randomBytes } from "node:crypto";

const password = process.argv[2];

if (!password || password.length < 12) {
  console.error("Give a password of at least 12 characters, in single quotes.");
  process.exit(1);
}

const hash = await bcrypt.hash(password, 12);

console.log("Add these two lines to .env.local:\n");
// Next.js treats $ as a variable marker, so each $ must be escaped with a backslash.
console.log("ADMIN_PASSWORD_HASH=" + hash.replace(/\$/g, "\\$"));
console.log("AUTH_SECRET=" + randomBytes(32).toString("hex"));
