import React, { useEffect, useState } from 'react';
import ItemDetail from "./ItemDetail";
import Promesas from "./Promesas";
import Productos from './Productos';
import { useParams } from 'react-router-dom';

export default function ItemDetailContainer (){
    const [producto, setProductos] = useState();
    const [loading, setLoading] = useState(true)
    const {id} = useParams()
            useEffect(() => {
        Promesas(1000, 'Items', Productos, id)
            .then(res => setProductos(res))
            .catch(error => console.log(error))
            .finally(()=>{
                setLoading(false)
            })
        }, [])
return(
    <>
    <div>
    {loading ? (<h2>Cargando productos</h2>) : (producto && <ItemDetail {...producto}/>)}
    </div>
    </>
)
}