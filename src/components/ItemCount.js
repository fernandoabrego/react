import Button from 'react-bootstrap/Button'
import React, {useState} from "react";
import { Container, Row} from 'react-bootstrap';

    export default function ItemCount({initial, stock, onAdd}){
        const[count, setCount] = useState(initial);

        function increase(){
            if (count < stock){
            setCount (count + 1);}
    }
        function decrease(){
            if (count > initial){
            setCount (count - 1);}
    }
    function reset(){
        setCount (initial);
    }
    function onAddCount(){
        onAdd(count)
    }
        return (
        <>
        <Container>
        <Row>
        <Button onClick={increase} variant="success">+</Button>
        <p className='text-center'>{count}</p>
        <Button onClick={decrease} variant="danger">-</Button>
        <Button className='mt-3' onClick={onAddCount/* Otra forma, por el momento no lo borramos, luego quedará solo una()=>onAdd(count) */} variant="primary">Agregar al carrito.</Button>
        <Button className='mt-3' onClick={reset} variant="warning">Vaciar carrito.</Button>
        <Button className='mt-3'>Ver detalle</Button>
        </Row>
        </Container>
        </>
        );
    }