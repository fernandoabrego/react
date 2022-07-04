import React, { useEffect, useState } from "react";
import ItemList from "./ItemList"
import Productos from "./Productos"
import Promesas from "./Promesas";
import s from './ItemListContainer.module.css'

    export default function ItemListContainer(){
        const [items, setItems] = useState([]);

        useEffect(() => {
            Promesas(2000, Productos)
            .then(res => setItems(res))
            .catch(error => console.log(error));
        }, [items])
        return (
            <div>
                <div className={s.contenedor}></div>
                <ItemList Productos={items}/>
    </div>
    );
}