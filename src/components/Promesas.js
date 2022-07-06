let estaOk = true;
const promesas = (tiempo, tipo, products, Id) => {
    return new Promise((resolve, reject) => {
        const filtrar = tipo === 'categoria' ? products.filter((prod) => prod.categoria ===Id) : products.find((prod) =>prod.id === parseInt(Id))
        setTimeout(() => {
                if (estaOk){
                    Id ? resolve(filtrar) : resolve(products);
                } else{
                    reject("error")
                }
            }, tiempo)})
    }    
    export default promesas;