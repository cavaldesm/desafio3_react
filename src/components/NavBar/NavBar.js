import React from "react";
import "./NavBar.css";
import StorefrontIcon from '@mui/icons-material/Storefront';
import PaidIcon from '@mui/icons-material/Paid';
import CartWidget from "../CartWidget/CartWidget";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const NavBar = () => {
    return (
        <div className="NavBar">
            <ul>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Sale</a></li>
                <li><a href="#">Contacto</a></li>
                <div className="StorefrontIcon">
                <StorefrontIcon>
</StorefrontIcon>
<PaidIcon>
</PaidIcon>
<CartWidget>
</CartWidget>
                </div>
                </ul>
        </div>
    )
}

export default NavBar;