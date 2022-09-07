import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

function Info (props){
    return (
        <div style = { { border: '1px solid white',
   width: '90%'}}>

        <p> {props.name}</p>

        <p> {props.number}</p>

        <img src={props.img}/>

<ItemCount>
    </ItemCount>


    </div>
    )
}

export default Info;