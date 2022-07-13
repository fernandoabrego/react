import React from "react";
import { Contexto } from "./CartContext";
import { useContext } from "react";
import { Button, ListGroup, Badge } from "react-bootstrap";
import { Link } from "react-router-dom";
export default function Cart(){
    const { carrito, quitarDelCarrito, vaciarCarrito, cant } =
    useContext(Contexto);
    let total = cant();

    return (
        <>
        <h1>Carrito</h1>
        <ListGroup as="ol">
            <div>
                {carrito.length > 0 ? 
                (carrito.map((item) => (
                    <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">{item.nombre}</div>$ {item.precio}
                        </div>
                        <Button variant="outline-secondary" onClick={() => quitarDelCarrito(item.id)}>
                            Quitar del carrito
                        </Button>
                        <Badge bg="primary" pill>
                            {item.counter}
                        </Badge>
                    </ListGroup.Item>
            ))
                ) :
                (
                    <div>
                        <Button as={Link} to="/" variant="outline-success">
                            Volver a comprar
                        </Button>{" "}
                        <br />
                        <h1>El carrito está vacío</h1>
                    </div>
                )}
            </div>
        </ListGroup>
        {carrito.length > 0 &&
            (
                <div>
                    <h2>Total: $ {total}</h2>
                    <hr />
                    <Button variant="outline-success" onClick={() => vaciarCarrito()}>
                        Terminar compra
                    </Button>
                    <hr />
                    <Button variant="outline-secondary" onClick={() => vaciarCarrito()}>
                        Vaciar carrito
                    </Button>
            </div>
            )}
        </>
    )
}