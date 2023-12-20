import React, {useState, useContext}  from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


export const Cards = (descrip) => {
	const { store, actions } = useContext(Context)

	const {name, gender, hair_color, eyes_color, population, terrain, diameter } = descrip.item.properties

	return (
		<div className="container_card  bg-transparent">
			<div className="card bg-transparent d-flex justify-content-center aling-item-center" style={{minWidth: "18rem "}}>
				<img src={"https://starwars-visualguide.com/assets/img/${descrip.types}/${descrip.item.uid}.jpg"}

					onError={(event)=>{
						
						event.target.src="https://starwars-visualguide.com/#/planets/9"
					}}
				
				className="card-img-top" alt="..."/>
				
				<div className="card-body">
					<h5 className="card-title text-light">{name}</h5>
					
					{
				
						descrip.types == "planets" ?(
							<div>
								<p className="text-start text-light m-0">population: {population}</p>
								<p className="text-start text-light m-0">terrain: {terrain}</p>
								<p className="text-start text-light m-0">diameter: {diameter}</p>
							</div>
						):(
						
							<div>
								<p className="text-start text-light m-0">gender: {gender}</p>
								<p className="text-start text-light m-0">hair_color: {hair_color}</p>
								<p className="text-start text-light m-0">eyes_color: {eyes_color}</p>
							</div>
						)
					}
					
					<div className="container_button d-flex justify-content-between mt-5 gap-3">
						<Link to={`/demo/${descrip.types}/${descrip.item.uid}`} className="btn btn-outline-danger d-flex mr-5">Knowladge is Power</Link>
						<button href="#" className="btn btn-outline-warning m-auto align-items-center fas fa-heart text-danger" 

						onClick={() => {actions.getFavorites(descrip.item.properties.name)}}></button>

					</div>
				</div>
			</div>
		</div>
	);
};