class Comment{
  constructor({
    content,
    studentName,
    studentRole = "estudiante",
  }){
    this.content = content;
    this.studentName = studentName;
    this.studentRole = studentRole;
    //podemos añadir nuevos atributos
    this.likes = 0;
  }

  publicar(){
    console.log(this.studentName + "(" + this.studentRole + ")");
    console.log(this.likes + " likes");
    console.log(this.content);
    
  }
}


function videoPlay(id){
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("se esta reproduciendo desde la url "+ urlSecreta);
}
function videoStop(id){
  const urlSecreta = "https://platziultrasecreto.com/" + id;
  console.log("pausamos la url "+ urlSecreta);
}

class PlatziClass{
  constructor({
    name,
    videoID,
  }){
    this.name = name;
    this.videoID = videoID;
  }

  reproducir(){
    videoPlay(this.videoID);
  }
  pausar(){
    videoStop(this.videoID);
  }
}



class Course {
  constructor({
    name,
    classes = [],
    isFree = false,
    lang = "spanish",
  }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }
  
  //getter y setters , encapsulamiento
  //recordar this._name , el _ se usa para decirle amablemente al equipo que no la modifique
  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito; 
    }
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
  isFree: true,
});

const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
  
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
  lang: "english",
});


class LearningPath {
  constructor({
    name,
    courses = [],
  }) {
    this.name = name;
    this.courses = courses;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [
    cursoProgBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML,
  ],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [
    cursoProgBasica,
    "Curso DataBusiness",
    "Curso Dataviz",
  ],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [
    cursoProgBasica,
    "Curso de Unity",
    "Curso de Unreal",
  ],
})



class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }

  publicarComentario(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,

    });
    comment.publicar();
  }
  
}


class FreeStudent extends Student{
  constructor(props){
    //super hace referencia al constructor de nuestra clase padre
    super(props);
  }
  approvedCourse(newCourse){
    if(newCourse.isFree){
      this.approvedCourses.push(newCourse);
    }else{
      console.warn("lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}
class BasicStudent extends Student{
  constructor(props){
    super(props);
    
  }
  approvedCourse(newCourse){
    if(newCourse.lang !== "english"){
      this.approvedCourses.push(newCourse);
    }else{
      console.warn("lo sentimos, " + this.name + ", no puedes tomar cursos en ingles");
    }
  }
}
class TeacherStudent extends Student{
  constructor(props){   
    super(props);
    
  }
  approvedCourse(newCourse){
      this.approvedCourses.push(newCourse);
  }

  //poliformismo
  publicarComentario(commentContent){
    const comment = new Comment({
      content: commentContent,
      studentName: this.name,
      studentRole: "profesor",

    });
    comment.publicar();
  }


}


const juan2 = new FreeStudent({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});

const miguelito2 = new BasicStudent({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});


const fredy = new TeacherStudent({
  name: "fredy Vega",
  username: "freddier",
  email: "fredy@juanito.com",
  instagram: "fredy_serio",

});

//polimorfismo
fredy.publicarComentario("excelente");
miguelito2.publicarComentario("me gusto , pero no tanto")