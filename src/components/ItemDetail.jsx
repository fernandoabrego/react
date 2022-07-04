import React from "react";
import ItemCount from "./ItemCount";
import styles from './ItemDetail.module.css';

export default function ItemDetail ({img, nombre, precio, detalle}) {
return(
    <>
        <div className={styles.contenedorDetalle}>
        <img src={img}  alt={nombre} />
            <h2>{nombre}</h2>
            <h3>{precio}</h3>
            <h4>{detalle}</h4>
            <ItemCount initial={1} stock={8} />
        </div>
    </>
);
};