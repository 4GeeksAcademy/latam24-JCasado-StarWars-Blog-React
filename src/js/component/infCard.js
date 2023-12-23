import React from "react";

export const Infcard = (descripD) => {
    const { name, model } = descripD.item.properties
    const { terrain, gravity } = descripD.item.properties

    return (
        <div className="container_inf">
            <div className="d-flex justify-content-center slign-items-center">
                <img src="https:.jpg" className="card-img-top" alt="..." />
            </div>
            <div className="text-ligth">
                <h3 text-danger >{name}</h3>
                <p>Model: {model}</p>
            </div>
            <div className="container_inf bg-black">
                <div className="d-flex justify-content-center slign-items-center">
                    <img src="https:.jpg" className="card-img-top" alt="..." />
                </div>
                <div className="text-ligth">
                    <h3 text-danger >{name}</h3>
                    <p>Terrain: {terrain}</p>
                    <p>Gravity: {gravity}</p>
                </div>
            </div>
        </div>
    );
};
