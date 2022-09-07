import React from "react";
import { useState, useEffect } from "react";
import Item from "../ItemList/ItemList";
import ItemDetail from "../ItemDetail/ItemDetail";

function ItemDetailContainer() {
    const [item, setItem] = useState(Item);
    useEffect(() => {
      const promesa = new Promise((resolve) => {
        setTimeout(() => {
          resolve(Item);
        }, 2000);
      });
      promesa.then(() => {
        setItem(Item[1]);
      });
      promesa.catch(() => {
        console.log("Error al cargar el producto.");
      });
    });
  
    return <ItemDetail item={item} />;
  }
  
  export default ItemDetailContainer;