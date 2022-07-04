import React from "react";
import Item from "./Item";

export default function ItemList({Productos}){
    return (
        Productos.map(prod => (
            <Item
            key={prod.id}
            nombre={prod.nombre}
            precio={prod.precio}
            img={prod.img}/>
    ))
    )
}