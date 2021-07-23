import express from "express";

const app = express();
app.use(express.json());

app.get("/", (_req, res) => {
  return res.send({
    message: `Olá mundo!!`,
  });
});

app.listen(3000, () => console.log("Executando na porta 3000"));
