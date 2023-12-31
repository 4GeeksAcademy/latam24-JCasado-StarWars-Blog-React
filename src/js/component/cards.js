import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import imgLogo from "../../img/Starwars_logo.png";

export const Cards = (descrip) => {
	const { actions } = useContext(Context)

	const { name, model, birth_year, hyperdrive_rating, gravity, terrain } = descrip.item.properties
	const img = `${descrip.types}/${descrip.item.uid}`
	return (

		<div className="card bg-black container_card mx-1" style={{ minWidth: "18rem" }}>
			<img src={`https://starwars-visualguide.com/assets/img/${img}.jpg`}

				className="card-img-top" alt="..." onError={(e) => {
					e.target.src = imgLogo;
				}} />

			<div className="card-body">
				<h5 className="card-title text-light">{name}</h5>

				{
					descrip.types == "planets" && (

						<div>
							<p className="text-start text-light m-0">Gravity: {gravity}</p>
							<p className="text-start text-light m-0">Terrain: {terrain}</p>
						</div>
					)}{descrip.types == "starships" && (
						<div>
							<p className="text-start text-light m-0">Model: {model}</p>
							<p className="text-start text-light m-0">Hyperdrive: {hyperdrive_rating}</p>
						</div>
					)
				}{descrip.types == "people" && (
					<div>
						<p className="text-start text-light m-0">Name: {name}</p>
						<p className="text-start text-light m-0">Birth day: {birth_year}</p>
					</div>
				)
				}
			</div>
			<div className="container_button d-flex justify-content-between mx-2 mt-5 gap-3">
				<Link to={`/demo/${descrip.types}/${descrip.item.uid}`} className="btn btn-outline-dark text-primary d-flex mr-5">Know more</Link>
				<button href="#" className="btn btn-outline-dark m-auto align-items-center fas fa-heart text-danger mx-1"

					onClick={() => { actions.getFavourites(descrip.item.properties.name) }}></button>
			</div>
		</div>
	);
};