// Creare un array di oggetti:
// ogni oggetto descriverà una bici da corsa
// con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.
// Usiamo il forEach

$(document).ready(function() {
  // array che descrive una bici
  const bici = [
    {
      nome: "città",
      peso: 7
    },
    {
      nome: "mountain bike",
      peso: 5
    },
    {
      nome: "bmx",
      peso: 3
    },
    {
      nome: "corsa",
      peso: 4
    },
    {
      nome: "graziella",
      peso: 6
    }
  ];

  // variabili che descrivono peso minore iniziale e nome bici
  let biciLeggera = bici[0].peso;
  let nome = bici.nome;

  // ciclo con forEach
  bici.forEach((item) => {
    // confronto la bici più leggera man mano con il peso della bici successiva
    if (biciLeggera > item.peso) {
      biciLeggera = item.peso;
      nome = item.nome;
    }
    // stampo in console la bici più leggera
    console.log(`la bici più leggera è ${nome} ed il suo peso è ${biciLeggera}kg`);
  });
});
