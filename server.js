const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    status: "ok",
    message: "QuickVideo backend is running"
  });
});

app.get("/api/status", (req, res) => {
  res.json({
    status: "online"
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`QuickVideo backend running on port ${PORT}`);
});
