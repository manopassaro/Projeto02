prompt = require('prompt-sync')();

// console.log();      
// console.log('Hello, world!');
// console.log();

console.log('Bem-vindo ao Pedra, Papel e Tesoura.');
console.log(`Digite 'Play' para jogar ou 'Exit' para sair.`);
let comando = prompt().toLowerCase();
console.log();

if(comando == 'play'){
    const armas = ['pedra', 'papel', 'tesoura']
    console.log(`Aqui você jogara contra o Computador uma 
disputa de Pedra Papel e Tesoura de quantas 
partidas desejar. Instruções: a cada partida
digite a arma que deseja usar na batalha.
*Pedra  *Papel  *Tesoura
Boa sorte!`)
console.log();

do{
    let vitoriaJ1 = 0
    let vitoriaPc = 0
    let empates = 0

const numero = prompt('Quantas partidas gostaria de jogar? ');
console.log();
console.log('----------');
console.log();

for(let i = 0; i < numero; i++){

let computador = Math.floor(Math.random() * (3));
let armaPc = armas[computador]
let armaJ1 = prompt(`Arma:`).toLowerCase();
console.log();

console.log('Arma escolhida: ', armaJ1)
console.log('Arma do adversário: ', armaPc);
console.log();

if(armaJ1 === armaPc){
    empates += 1
    console.log('Empate');
    console.log();
    console.log('----------');
    console.log();

}else if((armaJ1 == 'pedra' && armaPc == 'tesoura') || 
        (armaJ1 == 'papel' && armaPc == 'pedra') || 
        (armaJ1 == 'tesoura' && armaPc == 'papel')){
    vitoriaJ1 += 1
    console.log('Vitória para o jogador');
    console.log();
    console.log('----------');
    console.log();

}else{
    vitoriaPc += 1
    console.log('Vitória para o Computador');
    console.log();
    console.log('----------');
    console.log();
};


};
console.log('Suas vitórias: ', vitoriaJ1);
console.log('Vitórias do pc: ', vitoriaPc);
console.log('Empates: ', empates);
console.log();

if(vitoriaJ1 == vitoriaPc){
    console.log('O jogo acabou empatado...');
}else if(vitoriaPc > vitoriaJ1){
    console.log('O computador é o vencedor!');
}else{
    console.log('Você venceu!!!');
};
console.log('Deseja jogar novamente? *Sim ou *Não');
var repetir = prompt().toLowerCase();
console.log();

}while(repetir == 'sim');
    console.log('Obrigado por jogar!');
    
}else{
    console.log('Até a próxima.');
};
