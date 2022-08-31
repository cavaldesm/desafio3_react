import React from 'react';


function Info (props){
    return (
        <div style = { { border: '1px solid white',
   width: '90%'}}>

        <p> {props.name}</p>

        <p> {props.number}</p>

        <img src={props.img}/>

    </div>
    )
}

export default Info;