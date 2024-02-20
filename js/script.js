

// Spread Operator
// Operatore di spargimento
// ...


const persona = {
    nome: "Eleazaro",
    cognome: "Rossi",
    eta: 41
}


const nuovaPersona = {...persona};


persona.nome = "Mario";
persona.eta = 20;

// gli oggetti in JS sono per riferimento

console.log(nuovaPersona)