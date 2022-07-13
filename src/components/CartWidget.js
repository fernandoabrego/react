import React, {useContext}from "react";
import { Link } from "react-router-dom";
import { Contexto } from "./CartContext";

export default function CartWidget(){
  let {carrito} = useContext(Contexto);
    return (
    <>
      <Link to="/cart">
    <img src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg" style={{height:"25px", width: "25px", marginLeft:".5vw"}} alt="Carrito"></img>
    </Link>
    <div>({carrito.length})</div>
  </>
    );
  }