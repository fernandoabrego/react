import React from "react";
import {Card, Button} from "react-bootstrap"
import { Link } from "react-router-dom";

export default function Item({id, nombre, precio, img}){

    return (
        <>
          <Card key={id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={img}/>
            <Card.Body>
              <Card.Title>{nombre}</Card.Title>
              <Card.Text>{precio}</Card.Text>
              <Button as ={Link} to ={`/item/${id}`} className=' w-100 mt-3' >Ver detalle</Button>
            </Card.Body>
          </Card>
        </>
    )
}