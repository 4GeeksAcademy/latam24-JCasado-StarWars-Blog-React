import react, {useContext} from "react";
import { Context } from "../store/appContext.jsx";

export const ButtonFavourites = () => {
    const {store, actions} = useContext(Context);

    const favourite = store.favourites;

    return (
        <div ClassName="dropdown">
            <button ClassName="btn btn-danger dropdown-toggle" type="button" data-bs-toggle="dropdown">
                Favourites 
                <span ClassName="position-absolute top-1 start-90 badge rounded-circle bg-warning ">
                    {favourite.length}
                    </span>
                </button>
                <ul className="dropdown-menu dropdown-menu-dark dropdown-menu-end">
                {favorite.length === 0 ? (
                    <li><span className="dropdown-item"> No favorites selected yet </span></li>
                ) : (
                    favorite.map((item, id) => (
                        <li key={id} className="d-flex justify-content-between m-2  ">
                            <span className="dropdown-items text-light">{item}</span>
                            <button type="button" className="btn btn-outline-danger ms-2"
                            onClick={() => {actions.removeFavorites(id)}}>
                            <i className="fa fa-trash"></i>
                            </button>
                        </li>
                    ))                
                )
                }
            </ul>
        </div>
     )
}