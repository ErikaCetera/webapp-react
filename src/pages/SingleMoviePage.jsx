import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppReview from "../components/AppReview";

const SingleMoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const urlBe = import.meta.env.VITE_BACKEND_URL;

    useEffect(() => {
        axios.get(`${urlBe}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data);
        }).catch((err) => {
            console.error("Errore nel recupero del film:", err);
        });
    }, [id, urlBe]);

    if (!movie) {
        return <div>Caricamento...</div>;
    }

    return (
        <>
        <div className="container">
            <section>
                <img
                    className="w-25"
                    src={`${urlBe}${movie.image}`}
                    alt={movie.title}
                />
                <h1>{movie.title}</h1>
                <h2 className="text-primary">{movie.director}</h2>
                <p>Voto:</p>
                <p>Genere: {movie.genre}</p>
                <p>{movie.abstract}</p>
            </section>

            <section>
                <div className="row row-cols-1 ">
                    {movie.reviews.map(curReview => <AppReview key={curReview.id} review={curReview} />)}
                </div>
               </section>
             </div>
        </>
    );
};

export default SingleMoviePage;
