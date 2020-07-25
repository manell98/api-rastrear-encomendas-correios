import {createConnection} from "typeorm";

createConnection()
    .then(() => {
    console.log("Conectado ao banco de dados!");
}).catch(error => {
    console.log("Erro ao se conectar ao banco de dados", error);
});
