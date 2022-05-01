import "./FilmList.css";
import Card from "../card/Card";
import { useContext } from "react";
import {AllContext} from '../../context/AllContext'
import {getData} from '../../api-call/FetchData'

function FilmList() {
 
  const {filmList, setFilmList, setFilm, setFilmDetails} = useContext(AllContext);

  const getFilms = async () => {
    const data = await getData();
    setFilmList(data);
  };

  window.addEventListener("load", () => {
    getFilms();
  });


  return (
    <div className="filmList">
      <div className="thumbnail">
        {filmList.map((v, i) => (
          <Card
            key={i}
            showBigCard={async() => {
              const data = await getData();
              setFilm(data.filter((value) => value.title.includes(v.title)));
              setFilmDetails(true);
            }}
            poster={v.images}
            altImage={v.title}
            title={v.title}
            year={v.released}
            awards={v.awards}
          />
        ))}
      </div>
    </div>
  );
}

export default FilmList;
