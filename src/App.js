import React from 'react';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from './components/Cart';
import PaginaNoEncontrada from './components/PaginaNoEncontrada';

function App() {
  return (
<>
<BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/categoria/:categoriaId" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
        <Route path="*" element={<PaginaNoEncontrada/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
