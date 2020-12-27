import * as functions from "firebase-functions";

export const checkUA = functions.https.onRequest((req, res) => {
  const userAgent = req.headers["user-agent"] ?? "";
  res.status(200).send(userAgent);
});
