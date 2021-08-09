import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Land from "../components/Land.js";
import Loading from "../components/Loading.js";
import { useGlobalContext } from "../context";

export default function About() {
  const [favorites, setFavorites] = useState([]);
  const { lands, loading } = useGlobalContext();

  useEffect(() => {
    fetch("http://127.0.0.1:6001/lists")
      .then((res) => res.json())
      .then((listsArr) => {
        setFavorites(listsArr);
        console.log(listsArr);
      });
  }, []);

  if (favorites) {
    lands.filter((land) => land.list_id === 1);
  }

  if (loading) {
    return <Loading />;
  }
  if (lands.length < 1) {
    return (
      <h2 className="section-title">
        no countries matched your search criteria
      </h2>
    );
  }
  return (
    <section className="section">
      <h2 className="section-title">Countries</h2>
      <div className="cocktails-center">
        {lands.map((land) => {
          return <Land key={land.id} {...land} />;
        })}
      </div>
    </section>
  );
}
