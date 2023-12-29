import React, { useContext } from "react";
import { Context } from "../store/appContext.js";

export const ButtonFavorites = () => {
    const { store, actions } = useContext(Context);

    return (
        <div>
            <div className="btn-group dropstart mx-3">
                <button type="button" className="btn btn-outline-grey text-warning dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites {store.favorites.length}
                </button>
                <ul className="dropdown-menu bg-transparent text-danger">
                    {store.favorites.length === 0 ? (
                        <li><span className="dropdown-item bg-transparent text-danger">No favorites selected yet</span></li>

                    ) : (

                        store.favorites.map((item, id) => (

                            <li key={id} className="d-flex justify-content-between m-2  ">
                                <span className="dropdown-items text-light">{item} </span>

                                <button type="button" className="btn btn-outline-danger ms-2"
                                    onClick={() => { actions.removeFavorites(id) }}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )
                    }
                </ul>
            </div>
        </div>
    );
};