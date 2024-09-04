import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.post("/register", (req, res) => {
  res.sendStatus(201);
});

app.put("/user/ruta", (req, res) => {
  res.sendStatus(200);
});

app.delete("/user/ruta", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
