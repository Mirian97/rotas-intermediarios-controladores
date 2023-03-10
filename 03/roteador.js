const express = require("express");
const roteador = express();
const { imprimirListaImoveis, filtrarImovel } = require("./controladores/imoveis");

roteador.get("/imoveis", imprimirListaImoveis);
roteador.get("/imoveis/:id", filtrarImovel);


module.exports = roteador;