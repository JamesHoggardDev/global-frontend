import React from "react";
import Loading from "../components/Loading";
import { useParams, Link } from "react-router-dom";

export default function SingleLand({ handleClick }) {
  const { id } = useParams();
  const landId = id;

  const [loading, setLoading] = React.useState(false);
  const [land, setLand] = React.useState(null);

  React.useEffect(() => {
    setLoading(true);
    async function getLand() {
      try {
        const response = await fetch(`http://127.0.0.1:6001/lands/${id}`);
        const data = await response.json();
        if (data) {
          const {
            id: id,
            name: name,
            flag: image,
            capital: capital,
            currency: currency,
          } = data;

          const newLand = {
            id,
            name,
            image,
            capital,
            currency,
          };
          setLand(newLand);
        } else {
          setLand(null);
        }
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    }
    getLand();
  }, [id]);
  if (loading) {
    return <Loading />;
  }
  if (!land) {
    return <h2 className="section-title">no land to display</h2>;
  } else {
    const { name, image, capital, currency } = land;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">
          back home
        </Link>

        <h2 className="section-title">{name}</h2>
        <div key={id} onClick={(e) => handleClick(e, landId)} className="drink">
          <img key={id} src={image} alt={name}></img>
          <div className="drink-info">
            <button onClick={console.log()} className="btn btn-primary">
              Favorite
            </button>

            <br></br>
            <br></br>
            <p>
              <span className="drink-data">name :</span> {name}
              <span className="drink-data">capital :</span> {capital}
            </p>
            <p>
              <span className="drink-data">currency :</span> {currency}
            </p>
          </div>
        </div>
      </section>
    );
  }
}
