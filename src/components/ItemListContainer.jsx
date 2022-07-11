import React, { useEffect, useState } from "react";
import ItemList from "./ItemList"
import Productos from "./Productos"
import Promesas from "./Promesas";
import { useParams } from "react-router-dom";
import s from './ItemListContainer.module.css'

    export default function ItemListContainer(){
        const [items, setItems] = useState([]);
        const [loading, setLoading] = useState(true)
        const {categoriaId} = useParams()

        useEffect(() => {
            Promesas(1000, 'categoria', Productos, categoriaId)
            .then(res => setItems(res))
            .catch(error => console.log(error))
            .finally(()=>{
            setLoading(false)
            })        }, [categoriaId])
        return (
            <div>
                <div className={s.contenedor}></div>
                {loading ? (<h2>Cargando productos</h2>) : (<ItemList Productos={items}/>)}
            </div>
    );
}