const express = require("express");
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let i = 0;

const jogada = (req, res) => {
    let jogadaDaVez = `É a vez de ${jogadores[i]} jogar`;

    i++;
    if (i >= jogadores.length) {
        i = 0;
    }
    res.send(jogadaDaVez);
}

const remover = (req, res) => {
    const { indice } = req.query;

    if (isNaN(indice)) {
        return res.send("Número inválido atribuido ao parametro índice");
    }

    const numIndice = Number(indice);

    if (numIndice >= jogadores.length) {
        return res.send(`Não existe jogador no índice informado (${numIndice}) para ser removido.`);
    }

    jogadores.splice(numIndice, 1);
    res.send(jogadores);
}

const adicionar = (req, res) => {
    const { nome, indice } = req.query;
    const numIndice = Number(indice);

    if (!nome) {
        return res.send("Por favor, insira o nome do jogador!");
    }

    nome = nome[0].toUpperCase() + nome.slice(1).toLowerCase();

    if (numIndice >= jogadores.length) {
        return res.send(`O índice informado (${numIndice}) não existe no array. Novo jogador não adicionado.`);
    }

    if (isNaN(indice)) {
        jogadores.push(nome);
        return res.send(jogadores);
    }

    jogadores.splice(numIndice, 0, nome);
    return res.send(jogadores);
}

app.get("/", jogada);
app.get("/remover", remover);
app.get("/adicionar", adicionar)

app.listen(8000)