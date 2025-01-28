import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AppReview from "../components/AppReview";
import ReviewForm from "../components/ReviewForm";

const SingleMoviePage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const urlBe = import.meta.env.VITE_BACKEND_URL;

    // Valori iniziali del form
    const initialValues = {
        name: '',
        text: '',
        vote: 0
    };
    const [formData, setFormData] = useState(initialValues);

    const getMovie = () => {
        axios.get(`${urlBe}/movies/${id}`).then((resp) => {
            setMovie(resp.data.data);
        }).catch((err) => {
            console.error("Errore nel recupero del film:", err);
        });
    };

    useEffect(() => {
        getMovie();
    }, [id, urlBe]);

    if (!movie) {
        return <div>Caricamento...</div>;
    }

    // Invia dati del form al server al click del bottone
    const storeReview = (formData) => {
        axios.post(`${urlBe}/movies/${id}/reviews`, formData).then((resp) => {
            // Ripulisce i campi
            setFormData(initialValues);
            // Aggiorna recensioni del film
            getMovie();
        }).catch((err) => {
            console.error("Errore nell'invio della recensione:", err);
        });
    };

    return (
        <div className="container">
            <section>
                <img
                    className="w-25"
                    src={`${urlBe}${movie.image}`}
                    alt={movie.title}
                />
                <h1>{movie.title}</h1>
                <h2 className="text-primary">{movie.director}</h2>
                <p>Voto: {movie.vote_avg}</p>
                <p>Genere: {movie.genre}</p>
                <p>{movie.abstract}</p>
            </section>

            <section>
                <div className="row row-cols-1">
                    {movie.reviews.map(curReview => <AppReview key={curReview.id} review={curReview} />)}
                </div>
            </section>

            <section>
                <ReviewForm
                    onSubmitFunction={storeReview}
                    formData={formData}
                    setFormData={setFormData}
                />
            </section>
        </div>
    );
};

export default SingleMoviePage;

