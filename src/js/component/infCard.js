import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";

export const Infcard = (descripD) => {
    const {store, action} = useContext(Context)
    const {name, hair_color, heigth} = descripD.item.properties
    const {terrain, gravity} = descripD.item.properties

    return(
        <div className="container_inf bg-dark">
            <div className="d-flex justify-content-center slign-items-center">
                <img src="https:.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="text-ligth">
                <h3 text-danger >{name}</h3>
                <p>Hair color: {hair_color}</p>
                <p>Heigth: {heigth}</p>
            </div>
        <div className="container_inf bg-dark">
            <div className="d-flex justify-content-center slign-items-center">
                <img src="https:.jpg" className="card-img-top" alt="..."/>     
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
