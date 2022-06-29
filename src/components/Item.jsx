import React from "react";
import {Card, Button} from "react-bootstrap"
import ItemCount from "./ItemCount";
export default function Item({id, nombre, precio, img}){
    return (
        <>
        <Card key={id} style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img}/>
  <Card.Body>
    <Card.Title>{nombre}</Card.Title>
    <Card.Text>
        {precio}
    </Card.Text>
    <Button variant="primary">Ir</Button>
    <ItemCount initial={1} stock={8}/>
  </Card.Body>
</Card>
        </>
    )
}