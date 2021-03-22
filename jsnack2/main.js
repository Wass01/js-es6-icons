// Si scriva una funzione che accetti tre argomenti,
// un array e due numeri (a più piccolo di b).
// La funzione ritornerà un nuovo array con i valori
// che hanno la posizione compresa tra i due numeri
// ES. [1,2,3,4,5,6,7,8] => [3,4,5,6] (a=2, b=5)

$(document).ready(function() {

  // soluzione es5
  const argFun = (array, a, b) => {
    const newArray = array.slice(a, b + 1)
    return newArray;
  }

  const myArray = [2, 5, 3, 41,6, 22, 3, 9];
  let risultato = argFun(myArray, 1, 6);
  console.log(risultato);



});
