import React from "react";
import {Card, Button} from "react-bootstrap"
/* import ItemCount from "./ItemCount"; */
import { Link } from "react-router-dom";

export default function Item({id, nombre, precio, img}){
  function agregar(cantidad){
    if (cantidad > 0){
    alert ("Agregaste " + cantidad + " productos al carrito.")}
}
    return (
        <>
          <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{precio}</Card.Text>
              {/*<ItemCount initial={1} stock={8}/> */}
              <Button as ={Link} to ={`/item/${id}`} className=' w-100 mt-3' >Ver detalle</Button>
            </Card.Body>
          </Card>
        </>
    )
}