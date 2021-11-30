
//los clousure para manejar variables privadas en js

const person = () => {
    var saveName = "Name";
    return {
        getName: () => {
            return saveName;
        },
        setName: (name) => {
            saveName = name;
        },
    }
};

newPerson = person();
console.log(newPerson.getName());
newPerson.setName('oscar');
console.log(newPerson.getName());



