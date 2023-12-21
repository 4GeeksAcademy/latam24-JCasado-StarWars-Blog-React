import React, {useState, useContext} from "react";
import { Context } from "../store/appContext";

export const Infcard = (descripD) => {
    const {store, action} = useContext(Context)
    const {name, hair_color, heigth} = descripD.item.properties
    
    return(
        <div className="container_inf">
            <div className="d-flex justify-content-center slign-items-center">
                <img src="https:.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="text-ligth">
                <h3 text-danger >{name}</h3>
                <p>Hair color: {hair_color}</p>
                <p>Heigth: {heigth}</p>
            </div>
            
    );
};





const {Terrain, Gravity, Diameter} = descriptD.item.properties

        <div className="text-ligth">
                <h3 text-danger >{name}</h3>
                <p>Terrain: {hair_color}</p>
                <p>Gravity: {heigth}</p>
        </div>