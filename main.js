'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// An object that represents the three stacks of Towers of Hanoi; 
  // * each key is an array of Numbers: 
    // * A is the far-left, 
    // * B is the middle, 
    // * C is the far-right stack
      // * Each number represents the largest to smallest tokens: 
        // * 4 is the largest, 
        // * 1 is the smallest

let stacks = {                    // primeira Key eh A, Segunda eh B, Terceira C. Sao as colunas
                                // os numeros sao os blocos
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

// Start here. What is this function doing? 
//telling what piece is in that Stack. Getting the board ready
//essa funcao esta verificando em que poste esta o bloco. Deixando a board pronto.
const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

// Next, what do you think this function should do? // 
 // This Function will ONLY move a piece from one stack to another.
 // It will NOT CHECK to see if the move is legal. 

 //essa funcao esta APENAS movendo o bloco. NAO ESTA VERIFICANDO SE O MOVIMENTO EH PERMITIDO
//o .POP() faz retira o ultimo item da array. Nesse casso esta pegando o ultimo bloco da torre.
//o .PUSH() coloca o item na array. Ela faz o PUSH pra variavel nesse caso MOVER

const movePiece = (startStack, endStack) => {
  // Your code here
  let mover = stacks[startStack].pop()
  stacks[endStack].push(mover)
}
//   let inicio = stacks[startStack]
//   let final = stacks[endStack]
//   let mover = inicio.pop()
// final.push(mover)

// }

// Before you move, should you check if the move it actually allowed? Should 3 be able to be stacked on 2

/* Se o bloco que estiver no local for menor que o que ja esta presente, isso eh um legal move.
Tambem eh permitido que coloque o bloco em um lugar sem nada.
Nao pode colocar um bloco maior em cima de um bloco menor. */

const isLegal = (startStack, endStack) => {
  //mais importante de tudos

  if(stacks[startStack].length > 0){
    if(stacks[endStack].length == 0) {
      return true
    }if (stacks[endStack].slice(-1) > stacks[startStack].slice(-1)){

    return true
  } else{
    return false
    }
  }
//duvidas pra falar no tutor, pq quando usa lenght ele so retorna 1 como legalmove.
//pq ele usou slice? Unico motivo que usamos foi que olhamos outros exemplos AJUDA!!!!

// Jeff falou que poderia usar o POP tb, o Slice eh mais preciso, vc consegue apontar exatamente qual argumento ele ta buscando.
/*se o poste inicial tem maior de 0 blocos 



}

// What is a win in Towers of Hanoi? When should this function run?
//A win is when will stack the blocks has the lenght of 4. Not checking the legal move. If if 4 is b/c is legal
const checkForWin = () => {
  // Your code here
if ((stacks["b"].length == 4) || (stacks["c"].length == 4)) {
  return true 
   } else {
  return false
}

}

// When is this function called? What should it do with its argument?
/**
 * This is the most important part. Is where you put all together.
 * 
 * @param {string} startStack 
 * @param {string} endStack 
 */

//aqui eh apenas explicar a regra do jogo passo a passo: 
//1- MOVIMENTO EH LEGAL? SIM. 2- Move o Bloco. 3- Ganhou?! Sim! Console Parabens; Nao? Comeca de novo

const towersOfHanoi = (startStack, endStack) => { //MAIS IMPORTANTE!!
  // Your code here
if (isLegal(startStack, endStack)){
  movePiece(startStack, endStack) 
  if (checkForWin()){
    console.log("parabens!!")
    return true
  }
}

}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

} else {

  getPrompt();

} 
