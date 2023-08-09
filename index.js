import sendMessage from "./discord.js";
import express from "express";
const app = express();
const port = 8001;

app.use(express.json());

app.post("/", (req, res) => {
  sendMessage(req.body);
  res.status(200).send("received");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
