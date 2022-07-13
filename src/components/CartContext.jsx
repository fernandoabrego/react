import React, { useState, createContext } from "react";

export const Contexto = createContext();

export default function CartContext({ children }) {
    const [carrito, setCarrito] = useState([
    ]);
    const agregarAlCarrito = (item) => {
        const indexItem = carrito.findIndex((cartItem) => cartItem.id === item.id);
        if(indexItem !== -1){
            const cartCopy = [...carrito];
            cartCopy[indexItem].counter = cartCopy[indexItem].counter + item.counter;
        }else{
            setCarrito([...carrito, item]);}
    }
        const quitarDelCarrito = (id) => {setCarrito(carrito.filter((item) => item.id !== id));
        };
        const vaciarCarrito = () => setCarrito([]);

        const cant = () => {
            return carrito.reduce((total, item) => total + item.counter*item.precio, 0)}
        const cantItems = () => {
                return carrito.reduce((total, item) => total + item.counter, 0)
            }
    return (
    <>
        <Contexto.Provider value={{carrito, agregarAlCarrito, quitarDelCarrito, vaciarCarrito, cant, cantItems}}>{children}</Contexto.Provider>
    </>
    );
}