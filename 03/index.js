const express = require("express");
const roteador = require("./roteador");
const app = express();

app.use(express.json()) //transforma para objeto json(meu dados)
app.use(roteador);

app.listen(8000);