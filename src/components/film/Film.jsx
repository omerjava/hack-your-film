import React from "react";
import "./Film.css";
import BigCard from "../bigCard/BigCard";
import { useContext } from "react";
import { AllContext } from "../../context/AllContext";

function Film() {
  const { film } = useContext(AllContext);

  return (
    <div className="film">
      {film.map((film, i) => (
        <BigCard
          key={i}
          poster={film.images}
          altImage={film.title}
          title={film.title}
          plot={film.plot}
          actors={film.actors}
          director={film.director}
          year={film.released}
          awards={film.awards}
        />
      ))}
    </div>
  );
}

export default Film;
