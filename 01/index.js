const express = require("express");
const app = express();

const somar = (req, res) => {
    // const { num1, num2 } = req.query;
    if (isNaN(req.query.num1) || isNaN(req.query.num2)) {
        return res.status(400).json({ mensagem: "Números inválidos." })
    }

    const soma = Number(req.query.num1) + Number(req.query.num2);
    res.send(`A soma dos numeros é: ${soma}`);
}

const subtrair = (req, res) => {
    // const { num1, num2 } = req.query;
    if (isNaN(req.query.num1) || isNaN(req.query.num2)) {
        return res.status(400).json({ mensagem: "Números inválidos." })
    }
    const subtracao = Number(req.query.num1) - Number(req.query.num2);
    res.send(`A subtração dos numeros é: ${subtracao}`);
}

const multiplicar = (req, res) => {
    // const { num1, num2 } = req.query;
    if (isNaN(req.query.num1) || isNaN(req.query.num2)) {
        return res.status(400).json({ mensagem: "Números inválidos." })
    }
    const multiplicacao = Number(req.query.num1) * Number(req.query.num2);
    res.send(`A multiplicação dos numeros é: ${multiplicacao}`);
}

const dividir = (req, res) => {
    // const { num1, num2 } = req.query;
    if (isNaN(req.query.num1) || isNaN(req.query.num2)) {
        return res.status(400).json({ mensagem: "Números inválidos." })
    }
    const divisao = Number(req.query.num1) / Number(req.query.num2);
    res.send(`A divisão dos numeros é: ${divisao}`);
}

app.get("/somar", somar);
app.get("/subtrair", subtrair);
app.get("/multiplicar", multiplicar);
app.get("/dividir", dividir);

app.listen(8080);
