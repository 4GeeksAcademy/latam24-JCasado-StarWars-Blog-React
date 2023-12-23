import React, { useContext } from "react";
import { Cards } from "../component/cards.js";
import { Context } from "../store/appContext.js";

export const Home = () => {
    const { store } = useContext(Context)
    return (

        <div className="bg-dark">
            <div className="Starship m-5 bg-transparent">
                <h1 className="titleStarship text-danger mt-3">Starships</h1>
                <div className="faatherStarship d-flex text-center mt-5 gap-3">
                    {store.starships.map((starships, id) => {
                        return (<Cards item={starships} key={id} types={"starships"} />)
                    })}

                </div>
            </div>
            <div className="planets m-5 bg-transparent">
                <h1 className="titlePlanets text-danger mt-5">Planets</h1>
                <div className="fatherPlanets d-flex text-center mt-5 gap-3">

                    {store.planets.map((planet, id) => {
                        return (<Cards item={planet} key={id} types={"planets"} />)
                    })}
                </div>
            </div>
        </div>
    );
};