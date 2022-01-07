const express = require("express");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());

const { readAllMessages, addNewMessageRecord } = require("./user");

// Api : http://localhost:4000

app.get("/msgs-record", async (req, res) => {
  const list = await readAllMessages();
  res.json(list);
});

app.post("/add-record", async (req, res) => {
  const record = req.body;
  await addNewMessageRecord(record);

  res.json("Msg record Added");

  console.log("record added successfully");
});

app.listen(4000, () => console.log("Server Started...."));
