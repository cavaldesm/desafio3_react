import React from "react";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';

const ItemListContainer = (props) => {
    return (
        <div className="ItemListContainer">
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

export default ItemListContainer;