import express from 'express'

const app = express();
const port = 3000

app.get("/", (req, res) => {
    res.sendStatus(404)
  });

  app.get("/ask", (req, res) => {
    const link = req.query.domain;
    res.sendStatus(200);
  });

  app.listen(port)