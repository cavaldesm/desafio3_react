import React from "react";

function ItemDetail ({ item }) {
    return (
        <div className="columns">
            <div className="column is two-fifths m1-6 mt-5">
                <div className="card">
                    <div className="card-image has-text-centered">
                        <img src={item.img} />
                    </div>
                </div>
            </div>
            <div className="column is-6 ml-3 mr-6 mt-5">
        <div className="card pl-5 pr-5 pb-5">
          <h1 className="title is-4 pt-4">{item.name}</h1>
          <h2 className="title is-2">{item.number}</h2>
          <h3 className="title is-5">
            <strong>Descripción</strong>
          </h3>
          <p className="pb-4 has-text-justified">{item.descripcion}</p>
          <button className="button is-fullwidth is-medium is-link">
            Comprar
          </button>
        </div>
      </div>
        </div>
    );
}

export default ItemDetail;