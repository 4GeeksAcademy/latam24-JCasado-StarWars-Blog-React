import React, {useState, useContext} from "react";
import { Context } from "..store/appContext";
import { Link } from "react-router-dom";

export const Infcard = (descripD) => {
    const {store, action} = useContext(Context)
    const {name, gender, aye_color, mass} = descripD.item.properties
    return(
        <div className="container_inf">
            <div className="d-flex justify-content-center slign-items-center">
                <img src="https:.jpg" className="card-img-top" alt="..."/>
            </div>
            <div className="text-ligth">
                <h3 text-danger >{name}</h3>
                <p>gender</p>
                <p>eye_color</p>
                <p>hair_color</p>
                <p>heigth: {heigth}</p>
                <p>mass: {mass}</p>
            </div>
        </div>
    );
};