/* 
const obj1 = {
    a: "a",
    b: "b",
    c: {
      d: "d",
      e: "e",
    },
    editA() {
      this.a = "AAAAAA";
    }
  };
  
  //esto se usa para poder copiar o clonar un objeto a otro , como? , si convertimos un 
  //objeto a string y luego de string a objeto y nos ahorramos el problema en la memoria heap por el pointer
  //pero no funciona con metodos pq parse y stringify no trabajan con metodos

  //nota: tratar de no usar estas cosas
  const stringifiedComplexObj = JSON.stringify(obj1);
  const obj2 = JSON.parse(stringifiedComplexObj); */



  //recursividad
  //function recursiva(){
  //    if(/* validacion condificonal */){
  //      //llamados recursivos
  //    }else{
  //      //llamados normales, sin recursividad
  //    }
  //}


  const numeritos = [0,1,2,3,4,5,6,7,8,9,5465,746,456,999];
/*   
  let numerito = 0;
  for(let index = 0;index < numeritos.length; index++){
      numerito = numerio[index];
    console.log({index, numerito});
  } */


  function recursiva(numbersArray){
    if(numbersArray.length != 0){
        const firstNum = numbersArray[0];
        console.log(firstNum);
        numbersArray.shift();
        recursiva(numbersArray);
    }
  }
  recursiva(numeritos);