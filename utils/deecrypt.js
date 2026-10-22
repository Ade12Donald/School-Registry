import crypto from "crypto";

const key = Buffer.from(process.env.ENCRYPT_SECRET, "hex");

const decrypt = (authTag, encryptedData, iv) => {
  const decipher = crypto.createDecipheriv(
    "aes-256-gcm",
    key,
    Buffer.from(iv, "hex"),
  );

  decipher.setAuthTag(Buffer.from(authTag, "hex"));

  let decrypted = decipher.update(encryptedData, "hex", "utf8");

  decrypted += decipher.final("hex");

  return {
    message: decrypted,
  };
};
