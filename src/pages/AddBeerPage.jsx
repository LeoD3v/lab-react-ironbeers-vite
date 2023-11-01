import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
function AddBeerPage() {
  const [beerName, setBeerName] = useState("");
  const [beerTagline, setBeerTagline] = useState("");
  const [textArea, setTextArea] = useState("");
  const [firstBrewed, setFirstBrewed] = useState("");
  const [tips, setTips] = useState("");
  const [attenuation, setAttenuation] = useState(0);
  const [contribute, setContribute] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      name: beerName,
      tagline: beerTagline,
      description: textArea,
      first_brewed: firstBrewed,
      brewers_tips: tips,
      attenuation_level: attenuation,
      contributed_bu: contribute,
    };
    axios
      .post(`https://ih-beers-api2.herokuapp.com/beers/new`, body)
      .then((response) => {
        setBeerName("");
        setBeerTagline("");
        setTextArea("");
        setFirstBrewed("");
        setTips("");
        setAttenuation(0);
        setContribute("");
        navigate("/");
      });
  };

  return (
    <div className="border rounded p-2">
      <h1 className="text-center">Create Beer</h1>
      <form
        onSubmit={handleSubmit}
        className=" form d-flex flex-column  rounded"
      >
        <label htmlFor="name">Name</label>
        <input
          className="rounded mb-2"
          onChange={(e) => setBeerName(e.target.value)}
          type="text"
          name="name"
          value={beerName}
        />
        <label htmlFor="tagline">Tagline</label>
        <input
          className="rounded mb-2"
          onChange={(e) => setBeerTagline(e.target.value)}
          type="text"
          name="tagline"
          value={beerTagline}
        />
        <label htmlFor="description">Description</label>
        <textarea
          className="rounded mb-2"
          onChange={(e) => setTextArea(e.target.value)}
          value={textArea}
          name="description"
          type="description"
        >
          type something ...
        </textarea>
        <label htmlFor="first_brewed">First Brewed</label>
        <input
          className="rounded mb-2"
          onChange={(e) => setFirstBrewed(e.target.value)}
          name="first_brewed"
          type="text"
          value={firstBrewed}
        />
        <label htmlFor="brewers_tips">Brewer's tips</label>
        <input
          className="rounded mb-2"
          onChange={(e) => setTips(e.target.value)}
          name="brewers_tips"
          type="text"
          value={tips}
        />
        <label htmlFor="attenuation_level">Attenuation level</label>
        <input
          className="rounded mb-2"
          onChange={(e) => setAttenuation(e.target.value)}
          name="attenuation_level"
          type="number"
          value={attenuation}
        />
        <label htmlFor="contributed_by">Contributed by</label>
        <input
          className="rounded mb-2"
          onChange={(e) => setContribute(e.target.value)}
          name="contributed_by"
          type="text"
          value={contribute}
        />
        <button className="btn rounded bg-info text-white" type="submit">
          Add Beer
        </button>
      </form>
    </div>
  );
}

export default AddBeerPage;
