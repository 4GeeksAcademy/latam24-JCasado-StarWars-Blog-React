import React, { useContext, useEffect } from "react";
import { Cards } from "../component/cards";
impoort { Context } from "../store/appContext.js";

export const Home = () => {
    const { store, actions } = useContext(Context)
    return (

        <div>
            <div className="character m-5 bg-transparent"> 
            <h1 className="titleCharacter text-danger mt-3">Characters</h1>
            <div className="faatherCharacter" d-flex text-center mt-5 gap-3>
                {store.characters.map((character) => {
                    return (<Cards item={character} key={character.id} types={"characters"} />)
                })}

            </div>
        </div>

                <div className="planets m-5 bg-transparent">
                    <h1 className="titlePlanets text-danger mt-5">Planets</h1>
                    <div className="fatherPlanets d-flex text-center mt-5 gap-3">

                        {store.planets.map((planets) = > {
                            return (<Cards item={planets} key={planets.id} types={"planets"} />)
                        })}
                    </div>
                </div>
        </div>
    );
};