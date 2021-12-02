
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
  const obj2 = JSON.parse(stringifiedComplexObj);