import jwt from "jsonwebtoken";

//ACCESS TOKEN
export function signToken(res, tag, id, tokenName = "token") {
  const token = jwt.sign({ role: tag, id }, process.env.JWT_SECRET, {
    expiresIn: "15m",
  });
  res.cookie(tokenName, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    maxAge: 15 * 60 * 1000,
  });
}
