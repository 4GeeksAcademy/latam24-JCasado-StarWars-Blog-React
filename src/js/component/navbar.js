import React, {useContext, useEffect} from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { ButtonFavourites } from "./button";

export const Navbar = () => {
	
	const { store, actions } = useContext(Context)

	const favourites = store.favorites;

	return (
		<div>
			<nav className=" navbar navbar-light bg-black mb-1 justify-content-between p-2">
					<Link to="/">
						<img className="logo" src="logo.star.wars1.png"/>
					</Link>
				<div className="ml-auto">
					<Link to="/demo">
					</Link>
					<div className="btn-group">
						
					</div>
				</div>
			</nav>
		</div>
	);
};