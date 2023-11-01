import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
function RandomBeersPage() {
  const [randomBeer, setRandomBeer] = useState(null);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/random`)
      .then((response) => {
        setRandomBeer(response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);
  if (!randomBeer) {
    return <p>Loading...</p>;
  } else {
    return (
      <div className="beerdetail d-flex align-items-center  p-5 mb-2">
        <div>
          <img className=" beerimg" src={randomBeer.image_url} alt="beer" />
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="nameDetail">{randomBeer.name}</p>
            <p className="levelDetail">{randomBeer.attenuation_level}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="taglineDetail">{randomBeer.tagline}</p>
            <p className="brewDetail">{randomBeer.first_brewed}</p>
          </div>

          <p className="descDetail">{randomBeer.description}</p>
          <p className="contributedDetail">{randomBeer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default RandomBeersPage;
