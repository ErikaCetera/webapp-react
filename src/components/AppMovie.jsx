import React from "react";
import { Link } from "react-router-dom";

const AppMovie = ({ movie }) => {

    const urlBe = import.meta.env.VITE_BACKEND_URL;
    return (
        <>
        <div  className="card h-100">
            <img src={`${urlBe}${movie.image}`} className="card-img-top" alt={movie.title} />
            <div className="card-body">
                <h3 className="card-title">{movie.title}</h3>
                <h5 className="card-title">{movie.director}</h5>
                <p className="card-text">{movie.abstract}</p>
                <Link className="btn btn-success" to={`/movies/${movie.id}`}>
         Dettagli
        </Link>
            </div>
            </div>
        </>
    )
};

export default AppMovie;