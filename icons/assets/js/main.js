$(document).ready(function() {
  const icons = [
  	{
  		name: 'cat',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'crow',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dog',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dove',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'dragon',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'horse',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'hippo',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'fish',
  		prefix: 'fa-',
  		type: 'animal',
  		family: 'fas'
  	},
  	{
  		name: 'carrot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'apple-alt',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'lemon',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'pepper-hot',
  		prefix: 'fa-',
  		type: 'vegetable',
  		family: 'fas'
  	},
  	{
  		name: 'user-astronaut',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-graduate',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-ninja',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	},
  	{
  		name: 'user-secret',
  		prefix: 'fa-',
  		type: 'user',
  		family: 'fas'
  	}
  ];

// Milestone 1
// Partendo dalla seguente struttura dati, mostriamo
// in pagina tutte le icone disponibili come da layout.

icons.forEach((item, index) => {

  $(".box").append(`<div>
    <i class="${item.family} ${item.prefix}${item.name}"></i>
    <div>${item.name}</div>
    </div>`);

// Milestone 2
// Coloriamo le icone per tipo.

  $($(".box i")[index]).css("color", () => {
    if(item.type == "animal"){
      return "#0800ff";
    } else if(item.type == "vegetable"){
      return "#ffbf00";
    }
    else if(item.type == "user"){
      return "#8e00d6";
    }
  });
});





});
