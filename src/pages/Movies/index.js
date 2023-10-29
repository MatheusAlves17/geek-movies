import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import api from '../../services/api';

import './styles.css';

const Movies = () =>{
    const navigate = useNavigate();
    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const [loading, setLoading] = useState(true);
    
    const getMovie = async () => {
        await api.get(`movie/${id}`,{
            params: {
                api_key: '3a963db3747a0bcd5b77bea8cc7b930b',
                language: 'pt-BR',
            }
        }).then((response)=>{
            setMovie(response.data);
            setLoading(false)
        }).catch((error)=>{
            return navigate('/', { replace: true })
        });
    }

    const saveMovie = () => {
        const myMovies = localStorage.getItem('@geekMovies');

        let savedMovies = JSON.parse(myMovies) || [];

        const hasMovie = savedMovies.some((movieSave)=> movieSave.id === movie.id)

        if(hasMovie) {
            alert('Esse filme já foi salvo!')
            return;
        }

        savedMovies.push(movie);
        localStorage.setItem("@geekMovies", JSON.stringify(savedMovies))
        alert('Filme salvo com sucesso!')
    }

    useEffect(()=>{
        getMovie()
    },[id, navigate])

    if(loading){
        return(
            <h1 className="loading">Buscando filme...</h1>
        )
    }

    return(
        <div className="movie-info">
            <h1>{movie.title}</h1>
            <h2>{movie.tagline}</h2>
            <img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title}/>
            <h3>Sinopse</h3>
            <span>{movie.overview}</span>
            <h4>Avaliação {movie.vote_average}/10</h4>
            <div className="area-buttons">
                <button onClick={saveMovie}>
                    Salvar
                </button>
                <button>
                    <a href={`https://youtube.com/results?search_query=${movie.title} Trailer`} target="blank"  rel="external noreferrer">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movies;