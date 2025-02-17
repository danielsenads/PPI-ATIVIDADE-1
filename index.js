import express from "express";
import autenticar from "./seguranca/autenticar.js";     


const porta = 3200;
const localhost = "0.0.0.0"; //define nosso aplicativo estará dispinível em as interfaces de redes deste computador
const app = express();

//o HTTP é um protocolo stateless (sem estabelecimmento de ssessão)
//o servidor recebe uma requisição, processa a requisição e envia uma resposta
//sem se preocupar em identificar os atores envolvidos

//prepara o servidor para disponiblizar recursos estáticos
//erro: http://localhost:3200/publico/index.html
//certo: http://localhost:3200/index.html
app.use(express.static("./publico"));

//disponiblizando os arquivos da pasta privada
//a funçaõ autenticar se comporta como um middleware (atua na camada do meio)
app.use(autenticar, express.static("./privado"));

app.get("/dinheiro", (req, res) => {
    res.send("R$ 1000,00");
});

app.listen(porta, localhost, () => {
    console.log(`Servidor rodando em http://${localhost}:${porta}`);
} );