alert("Vamos começar? Quero saber mais sobre você!")

const nome = prompt("Qual seu nome?");

const msgNome = `Olá, ${nome}, seja bem vindo!`;

alert(msgNome);

const cidade = prompt("Agora nos conte, de qual cidade você é?");

const msgCidade = `${cidade} é uma cidade linda!`;

alert(msgCidade);

const idade = prompt("Queremos saber também a sua idade.");

const msgIdade = `Você tem ${idade} anos? Maravilha!`;

alert(msgIdade);

const linguagem = prompt("Qual linguagem de programação você está estudando?");

const mgsLinguagem = prompt(`E você gosta de estudar ${linguagem}? Digite 1 para SIM e 2 para NÃO.`);

const respLinguagem1 = `Muito bom! Continue estudando e você terá muito sucesso.`;

const respLinguagem2 = `Ahh que pena... Espero que encontre a linguagem que você goste!`;

if(mgsLinguagem == 1) {
    alert(respLinguagem1)
    } else {
        alert(respLinguagem2)
        }

alert("Muito obrigada por participar comigo do desafio #7DaysOfCode da #Alura!")