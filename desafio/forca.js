class Forca {

  //O jogo inicia com 6 vidas. (regra de número 1)
  //O jogo inicia com o estado `aguardando chute`. (regra de número 2)
  vidas = 6;
  estado = 'aguardando chute'; 
  palavra = [];
  letrasChutadas = []; 
  
  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.palavra = Array(this.palavraSecreta.length).fill('_');
  }
  
  chutar(letra) { 

    //Todo chute deve conter apenas uma letra, se por algum acaso tenha mais de uma, a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado do jogo. (regra de número 3)
    //Caso a letra chutada esteja errada, mas já foi chutada anteriormente, a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado. (regra de número 4)
    //Toda chamada ao método chutar deve registrar a letra em letrasChutadas. (regra de número 5)
    if (letra.length > 1) {
      console.log("Escolha apenas uma letra");
      return;
    } else if (this.letrasChutadas.includes(letra)) {
        console.log("Ops!! Letra já Usada");
        return;
      } else {
          this.letrasChutadas.push(letra);
        } 

    //Se a letra chutada não estiver contida na palavra, deve subtrair uma vida. (regra de número 6) -1 life
    //Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição. (regra de número 7)

    if (!this.palavraSecreta.includes(letra)) {
      this.vidas--;
    } else { 
        for (let i = 0; i < this.palavraSecreta.length; i++) {
          if (this.palavraSecreta[i] === letra) {
            this.palavra[i] = letra;
          }
        } 
      } 

    //Se a quantidade de vidas chegar a 0 (zero), o estado do jogo deve mudar para `perdeu`. (regra de número 8)
    //Se a quantidade de vidas for maior que zero e o jogador acerte pelo menos a última letra, o estado do jogo deve mudar para `ganhou`. (regra 9)
    if (this.vidas === 0) { 
      this.estado = 'perdeu';
    } else if (this.palavra.join('') === this.palavraSecreta) {
        this.estado = 'ganhou';
      } else { 
         this.estado = 'aguardando chute';
        } 

  }

  buscarEstado() { //Valores existentes: "perdeu", "aguardando chute" ou "ganhou" 
    return this.estado;  
  } 

  buscarDadosDoJogo() {
      return {
        vidas: this.vidas, //Quantidade de vidas restantes no jogo
        palavra: this.palavra, //Deve gerar um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
        letrasChutadas: this.letrasChutadas  //Deve conter todas as letras chutadas pelo usuário
      }
  }
}

module.exports = Forca;
