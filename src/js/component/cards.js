import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import imgLogo from "../../img/Starwars_logo.png";

export const Cards = (descrip) => {
	const { actions } = useContext(Context)

	const { name, model, gravity, terrain, } = descrip.item.properties
	const img = descrip.types == "planets" & descrip.item.uid == 1 ? `${descrip.types}/2` : `${descrip.types}/${descrip.item.uid}`
	return (
		<div className="container_card bg-black">
			<div className="card bg-transparent d-flex justify-content-center aling-item-center">
				<img src={`https://starwars-visualguide.com/assets/img/${img}.jpg`}

					className="card-img-top" alt="..." onError={(e) => {
						e.target.src = imgLogo;
					}} />

				<div className="card-body">
					<h5 className="card-title text-light">{name}</h5>

					{
						descrip.types == "planets" ? (

							<div>
								<p className="text-start text-light m-0">Gravity: {gravity}</p>
								<p className="text-start text-light m-0">Terrain: {terrain}</p>
							</div>
						) : (
							<div>
								<p className="text-start text-light m-0">Model: {model}</p>
							</div>
						)
					}

					<div className="container_button d-flex justify-content-between mt-5 gap-3">
						<Link to={`/demo/${descrip.types}/${descrip.item.uid}`} className="btn btn-outline-danger d-flex mr-5">Know more</Link>
						<button href="#" className="btn btn-outline-warning m-auto align-items-center fas fa-heart text-danger"

							onClick={() => { actions.getFavorites(descrip.item.properties.name) }}></button>
					</div>
				</div>
			</div>
		</div>
	);
};