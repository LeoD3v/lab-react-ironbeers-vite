import axios from "axios";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
function AllBeersPage() {
  const [beers, setBeers] = useState([]);
  const [searchletter, setSearchLetter] = useState("");
  console.log(searchletter);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchletter}`)
      .then((response) => {
        setBeers(response.data);
      });
  }, [searchletter]);

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/`)
      .then((response) => {
        setBeers(response.data);
      })
      .catch((err) => console.log("error", err));
  }, []);
  return (
    <div>
      <div className="text-end rounded">
        <label className="p-2">Search</label>
        <input
          onChange={(e) => setSearchLetter(e.target.value)}
          type="text"
          name="search"
          value={searchletter}
        />
      </div>
      {beers.map((beer) => (
        <div
          key={beer._id}
          className="beerlist d-flex align-items-center  p-5 mb-2"
        >
          <div>
            <Link to={`/beer/${beer._id}`}>
              <img
                className="custom-img   img-fluid"
                src={beer.image_url}
                alt="beer"
              />
            </Link>
          </div>
          <div>
            <p className="beerName">{beer.name}</p>
            <p className="tagline">{beer.tagline}</p>
            <p className="contribute">{beer.contributed_by}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AllBeersPage;
