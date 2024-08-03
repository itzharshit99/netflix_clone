import React, { useEffect, useRef, useState } from "react";
import "./titlecards.css";
import cards_data from "../../assets/cards/Cards_data.js";


const TitleCards = ({title,category}) => {
  const [apiData,setApiData] = useState([]);
  const cardsRef = useRef();
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMGEzZjI5MjFjYWExNTM4NmMzODEzZGZlNjI2ZWE1NyIsIm5iZiI6MTcyMjY4MTcyMi45MzE0NDcsInN1YiI6IjY2YWUwN2VmMjU0NDZiMTdkZWMwNTFmZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eZEprRy_SchdAxt1xuPptka88jdJlR7YZJ0T5bDjca8'
    }
  };
  
  
  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  };
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));

    cardsRef.current.addEventListener("wheel", handleWheel);
  }, []);
  return (
    <div className="titleCards">
      <h2>{title?title:"Popular on Netflix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <div className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
