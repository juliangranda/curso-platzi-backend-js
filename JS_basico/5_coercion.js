//coercion

//explicita: es la forma en que obligamos a que un tipo de valor cambio a otro tipo si necesitamos que sea de un tipo distinto
//implicita: es cuando el lenguaje nos ayuda y cambia de un tipo de valor a otro tipo de valor


//implicita
var a = 4 + "7";
typeof a;

var b = 4 * "7";
typeof b;

//explicita

var c = 20;
var d = c + "";
console.log(d);
typeof d;
//ecuacion explicita al obligarlo con String()
var e = String(c);
typeof e;

var f = Number(e);
typeof f;


