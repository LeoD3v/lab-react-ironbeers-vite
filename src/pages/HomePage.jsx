import { Link } from "react-router-dom";
function HomePage() {
  return (
    <div className="homepage-links  ">
      <div>
        <img
          className="w-100 h2 rounded"
          src="/src/assets/beers.png"
          alt="beers"
        />
        <div>
          <Link className="h2" to={"/beers"}>
            <h2>
              All Beers{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right text-info"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </h2>
          </Link>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae quo
            necessitatibus est sit minus. Doloremque itaque atque architecto eos
            ipsa incidunt nisi similique impedit alias! Cum excepturi unde quia
            ducimus.
          </p>
        </div>
      </div>
      <div>
        <img
          className="w-100 rounded"
          src="/src/assets/random-beer.png"
          alt="random"
        />
        <div>
          <Link className="h2" to={"/random-beer"}>
            <h2>
              Random Beers{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-arrow-right text-info"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                />
              </svg>
            </h2>
          </Link>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. At rem
            error veniam mollitia maiores magnam voluptatem iure expedita, magni
            natus voluptates nemo cupiditate ipsam excepturi aspernatur.
            Voluptate architecto quidem id?
          </p>
        </div>
      </div>

      <img
        className="w-100 rounded"
        src="/src/assets/new-beer.png"
        alt="new beer"
      />
      <div>
        <Link className="h2" to={"/new-beer"}>
          <h2>
            Create a new beer{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-arrow-right text-info "
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
              />
            </svg>
          </h2>
        </Link>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus
          hic sequi dolorum magni consequuntur beatae perferendis, qui aperiam
          eius quas, autem consectetur esse quibusdam fuga natus! Veritatis
          harum ducimus magni.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
