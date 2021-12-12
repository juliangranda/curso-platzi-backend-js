const somethingWillHappen = () => {
    return new Promise((resolve,reject) => {
        if(true){
            resolve('hey');
        }else{
            reject('opps');
        }
    });
};

somethingWillHappen()
    .then(response => console.log(response))
    .catch(error => console.log(error));

const somethingWillHappen2 = () => {
    return new Promise((resolve, reject)=> {
        if(true){
            setTimeout(() => {
                resolve('true');
            },2000)
        }else{
            const error = new Error('woopps');
        }
    });
};

somethingWillHappen2()
    .then(response => console.log(response))
    .then(() => console.log('hola'))
    .catch(error => console.log(error));


//recibe todas las promesas
Promise.all([somethingWillHappen(), somethingWillHappen2()])
    .then(response => {console.log('array of results', response)})
    .catch(error => {
        console.error(error);
    });





