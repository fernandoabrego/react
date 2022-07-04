import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import { Container, Row} from 'react-bootstrap';

    export default function ItemCount({initial, stock}){
        const[count, setCount] = useState(initial);

        function increase(){
            if (count < stock){
            setCount (count + 1);}
    }
        function decrease(){
            if (count > initial){
            setCount (count - 1);}
    }
        function onAdd(){
            if (count > 0){
            alert ("Agregaste " + count + " productos al carrito.")}
    }
    function reset(){
        setCount (0);
    }
        return (
        <>
        <Container >
        <Row>
        <Button onClick={increase} variant="success">+</Button>
        <p className='text-center'>{count}</p>
        <Button onClick={decrease} variant="danger">-</Button>
        <Button className='mt-3' onClick={onAdd} variant="primary">Agregar al carrito.</Button>
        <Button className='mt-3' onClick={reset} variant="warning">Vaciar carrito.</Button>
        <Button className='mt-3'> Ver detalle</Button>
        </Row>
        </Container>
        </>
        );
    }