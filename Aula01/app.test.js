

const requisicao = require('supertest');
const app = require('./app') //sempre importa o app pois ele é a nossa aplicação,independente do teste

//descrevendo uma historia de teste e criando o script

describe("Testa o serviço de inversão de strings", () => {
    test("Deve retornar a sintrg original de forma invertida", async () => { //async palavra reservada definindo q a funcao é assincrona

        let str = "animal";

        /**
         * Realize uma requisição ao serviço 
         * de inversão de strings ,passando a palavra "animal" como parâmetro.
         * A resposta do serviço (HttpResponse) será armazenada na variável "resposta".
         * voce nao vai passar pra linha debaixo enquanto nao devolver  resultado usando await
         */
        let resposta = await requisicao(app).get(`/inverter/${str}`);

        //Body representa o corpo da resposta
        // let resultado = resposta.body.resultado; Mostra apenas a propriedade resultado

        let { resultado } = resposta.body;

        // Espero que o valor da variavel seja igual a "lamina"         
        expect(resultado).toBe("lamina");

        str = "b";
        resposta = await requisicao(app).get(`/inverter/${str}`);
        // um dos modos de fazer outro teste ({ resultado } = resposta.body);
        resultado = resposta.body.resultado;
        expect(resultado).toBe("b");

        // Espera que o valor da variavel seja igual a "oÇrEuGuM"
        str = "MuGuErÇo";
        resposta = await requisicao(app).get(`/inverter/${str}`);
        resultado = resposta.body.resultado;
        expect(resultado).toBe("oÇrEuGuM");


    });
});

describe("Testa o serviço de validaçao de CPFs", () => {
    test("Deve retornar true ao receber um CPF valido", async () => {

        //const nao pode ser alterado..
        const cpfsValidos = [
            "33239295784",
            "52839330164",
            "38974289628",
            "57528734365",
            "38063582497",
            "85447622638"
        ];

        for (let i = 0; i < cpfsValidos.length; i++) {
            let resposta = await requisicao(app).get(`/cpf/${cpfsValidos[i]}`);
            let valido = resposta.body.valido;
            // ou let { valido } = resposta.body;
            expect(valido).toBe(true);
        }

    });

    test("Deve retornar false ao receber um CPF inválido", async () => {
        const cpfsInvalidos = [
            "18911383671",
            "38847808407",
            "88456954501",
            "85237941662",
            "123",
            "abc"
        ];

        for (let i = 0; i < cpfsInvalidos.length; i++) {
            let resposta = await requisicao(app).get(`/cpf/${cpfsInvalidos[i]}`);
            let valido = resposta.body.valido;
            expect(valido).toBe(false);
        }
    });
});