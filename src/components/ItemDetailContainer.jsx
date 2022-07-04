import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import Promesas from "./Promesas";
import { product } from './Productos';

export default function ItemDetailContainer (){
    const [Producto, setProductos] = useState({});
        useEffect(() => {
        Promesas(2000, product)
            .then(res => setProductos(res))
            .catch(error => console.log(error));
        }, [])
return(
    <>
    <div>
        <ItemDetail {...Producto}/>
    </div>
    </>
)
}