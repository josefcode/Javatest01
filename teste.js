let numeros = [2, 4, 6, 8, 12];
let impares = numeros.map(function(a){
    return a - 1;
});
console.log(impares);
let numeroLista = [1, 3, 5, 6, 7];
let result = numeroLista.reduce(function(a, b){ 
    return   a +" - " + b;
     });
     console.log(result);

     let nomes = ['atef', 'professor', 'linkon', 'Maria', 'Maria'];

     let nomeEsp = nomes.filter(nome=> nome == "Maria");
    
     console.log(nomeEsp);
 
     let animais = ['vaca','cachorro','gato'];

     animais.forEach( a => console.log(`O animal é ${a}`));
