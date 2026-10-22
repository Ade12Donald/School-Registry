import crypto from "crypto";

const key = Buffer.from(process.env.ENCRYPT_SECRET, "hex");

const encrypt = (message) => {
  const iv = crypto.randomBytes(12);

  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  let encrypted = cipher.update(message, "utf8", "hex");

  encrypted += cipher.final("hex");
  const authTag = cipher.getAuthTag();
  return {
    status: "successful",
    encryption: encrypted,
    iv: iv.toString("hex"),
    authTag: authTag.toString("hex"),
  };
};
