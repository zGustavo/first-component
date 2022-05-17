import React, {Fragment, useState, useEffect} from 'react';
import Planet from './planet';

/*const showMessage = () => {
    console.log("Meu primeiro evento");
}
*/

async function getPlanets() {
    let response = await fetch('http://localhost:3000/api/planets.json');
    let data = await response.json();
    return data;
}

/* componentDidMount() {
    getPlanets().then(data => {
        setState(state => ({
            planets: data['planets']
        }))
    })
} */

const Planets = () => {

    const [planets, setPlanets] = useState([]);

    useEffect(() =>{
        getPlanets().then(data => {
            setPlanets(data['planets']);
        })
    }, [])

    const removeLast = () => {
        let new_planets = [...planets];
        new_planets.pop();
        setPlanets(new_planets);
    }

    const duplicateLastPlanet = () => {
        let last_planets = planets[planets.length - 1];
        setPlanets([...planets, last_planets]);

    }
    return (
        <Fragment>
            <h3>Planet List</h3>
            <button onClick={removeLast}>Remove Last</button>
            <button onClick={duplicateLastPlanet}>Duplicate Last</button>
            <hr />

            {planets.map((planet, index) => 
                <Planet 
                    id={planet.id}
                    name={planet.name}
                    description={planet.description}
                    img_url={planet.img_url}
                    link={planet.link}
                    key={index}
                />
            )}

        </Fragment>
    )
}

export default Planets;