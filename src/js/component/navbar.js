import React from "react";
import { Link } from "react-router-dom";
import imgLogo from "../../img/logo-starwars.png";
import { ButtonFavourites } from "./button";

export const Navbar = () => {

	return (
		<div>
			<nav className=" navbar navbar-dark bg-black mb-1 justify-content-between p-2">
				<Link to="/">
					<img width="50" height="50" className="d-inline-block align-top" alt="Logo" src={imgLogo}></img>
				</Link>
				<div className="ml-auto">
					<ButtonFavourites />
				</div>
			</nav>
		</div>
	);
};