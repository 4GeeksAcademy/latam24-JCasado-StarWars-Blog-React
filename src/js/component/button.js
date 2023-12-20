import React, {useContext} from "react";
import { Context } from "../store/appContext.js";

export const ButtonFavourites = () => {
    const {store, actions} = useContext(Context);

    const favourites = store.favourites;

    return (

        <div ClassName="dropdown">
            <button ClassName="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favourites 
                <span className="position-absolute top-1 start-90  badge rounded-circle bg-warning ">
                        {favourites.length}
                    </span>
                </button>

                <ul ClassName="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                {favourites.length === 0 ? (

                    <li><span ClassName="dropdown-item"> No favourites selected yet </span></li>

                ) : (

                    favourites.map((item, id) => (

                        <li key={id} ClassName="d-flex justify-content-between m-2  ">
                            <span ClassName="dropdown-items text-light">{item}</span>

                            <button type="button" ClassName="btn btn-outline-danger ms-2"
                            onClick={() => {actions.removeFavorites(id)}}>
                            <i ClassName="fa fa-trash"></i>
                            </button>
                        </li>
                    ))                
                )
                }
            </ul>
        </div>
     );
};