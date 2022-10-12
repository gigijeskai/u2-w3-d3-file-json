let datiDaJson = `{
    "studenti" : [
    {
    "nome": "mario",
    "cognome":"rossi",
    "anni": 22,
    "conocscenze": [
        {"html": "base",
        "css": "base",
        "javascript":"beginner"
    }
    ],
    "nazione": "italia" 
},
{
    "nome": "marta",
    "cognome":"pippo",
    "anni": 52,
    "conocscenze": [
        {"html": "base",
        "css": "nessuna",
        "javascript":"avanzate"
    }
    ],
    "nazione": "finlandia" 
},
{
    "nome": "michele",
    "cognome":"bianco",
    "anni": 28,
    "conocscenze": [
        {"html": "nessuna",
        "css": "avanzato",
        "javascript":"base"
    }
    ],
    "nazione": "spagna" 
}
    ]
}`;

let studenti = JSON.parse(datiDaJson);

let stringaStudenti = JSON.stringify(studenti);
localStorage.setItem("studenti", stringaStudenti);

function mostraStudenti() {
  let mostra = localStorage.getItem("studenti");
  document.querySelector("div").innerHTML += mostra;
}
