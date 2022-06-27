import React from "react";
import ItemCount from "./ItemCount";
    export default function ItemListContainer(props){
    return (
    <>
        <h1>{props.saludo}</h1>
        <ItemCount initial={1} stock={8}/>
    </>
    );
}