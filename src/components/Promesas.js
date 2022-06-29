let estaOk = true;

const promesas = (tiempo, tarea) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(estaOk) {
                resolve(tarea);
            } else {
                reject('Error');
            }
    }, tiempo)})};

    export default promesas;