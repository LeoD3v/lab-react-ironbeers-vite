import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios, { Axios } from "axios";
function BeerDetailsPage() {
  const [beerDetail, setBeerDetail] = useState(null);
  const { beerId } = useParams();

  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/${beerId}`)
      .then((response) => {
        setBeerDetail(response.data);
      })
      .catch((err) => {
        console.log(`error`, err);
      });
  }, [beerDetail]);

  if (!beerDetail) {
    return <p>Loading..</p>;
  } else {
    return (
      <div className="beerdetail d-flex align-items-center  p-5 mb-2">
        <div>
          <img className=" beerimg" src={beerDetail.image_url} alt="beer" />
        </div>
        <div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="nameDetail">{beerDetail.name}</p>
            <p className="levelDetail">{beerDetail.attenuation_level}</p>
          </div>
          <div className="d-flex align-items-center justify-content-between">
            <p className="taglineDetail">{beerDetail.tagline}</p>
            <p className="brewDetail">{beerDetail.first_brewed}</p>
          </div>

          <p className="descDetail">{beerDetail.description}</p>
          <p className="contributedDetail">{beerDetail.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default BeerDetailsPage;
