import React from 'react';
import { useState} from 'react';

const ItemCount = ({ onAdd, initial, stock }) => {
    initial = 1;
    stock = 10;

    const [qty, setQty] = useState(initial);

    const addProduct = (num) => {
        setQty(qty + num);
    };

    return (
        <div className= "count-container">
            <h1><u>Cantidad:</u></h1>
            <div className= "count-container-contador">
                <button className="count-container-button" 
                onClick = {() => addProduct(-1)}
                disabled={qty === initial}>
                    -
                </button>
                <span className= "count-container-qty">{qty}</span>
                <button className="count-container-button"
                onClick={() => addProduct(+1)}
                disabled={qty === stock}>
                    +
                </button>
            </div>

            <button className="button-primary"
            onClick={() => { 
                onAdd(qty);
            }}
            disabled={stock === 0 ? true : null}>
                Agregar al carrito :)
            </button>
        </div>
    );
};

export default ItemCount;