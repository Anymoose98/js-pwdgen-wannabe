// nome
let nome = prompt("inserisci il tuo nome");
console.log(nome);
document.getElementById('nome').innerHTML = document.getElementById('nome').innerHTML + nome;


// cognome
let cognome = prompt("inserisci il tuo cognome");
console.log(cognome);
document.getElementById('cognome').innerHTML = document.getElementById('cognome').innerHTML + cognome;

// colore preferito
let colore = prompt("inserisci il tuo colore preferito");
console.log(colore);
document.getElementById('colore').innerHTML = document.getElementById('colore').innerHTML + colore;

// password
let password = (nome + cognome + colore + 23);
console.log(password);
document.getElementById('password').innerHTML = document.getElementById('password').innerHTML + password;




