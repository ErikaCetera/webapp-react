import axios from "axios";
import { useEffect, useState } from "react";
import AppMovie from "../components/AppMovie";


//Preleva film dal server
const MoviesPage = () => {

    const urlBe = import.meta.env.VITE_BACKEND_URL;
    const [movies, setMovies] = useState([]);

    const getMovies = () => {

        axios.get(`${urlBe}/movies`).then((resp) => {
            console.log(resp);
            setMovies(resp.data.data);
        })
    };

    //Mostra all'avvio della pagina la funzione per prelevare i film
    useEffect(() => {
        getMovies()
    }, []);


    return (
        <>
            <div  className="container" >
                <div className="row my-5">
                    {/* //Mostra in pagina le card */}
                    {movies.map((curMovie) => {
                        return (
                            <div className= "col" key={curMovie.id}>
                            <AppMovie movie={curMovie}/>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
};

export default MoviesPage;