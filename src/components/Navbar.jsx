import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div
      className="home-img-container bg-info  mb-2 p-2   navbar-light 
       text-center fixed-top d-flex justify-content-start"
    >
      <h1 className="text-white">React IronBeers</h1>
      <Link to={"/"}>
        <img
          className="bg-info home-img"
          src="/src/assets/home-icon.png"
          alt="home"
        />
      </Link>
    </div>
  );
}

export default Navbar;
