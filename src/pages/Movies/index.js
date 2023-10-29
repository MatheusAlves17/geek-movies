import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import api from '../../services/api';

import './styles.css';

const Movies = () =>{
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
            console.log(response.data)
        }).catch((error)=>{
            console.log('400', error);
        });
    }

    useEffect(()=>{
        getMovie()
    },[id])

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
                <button>
                    Salvar
                </button>
                <button>
                    <a href="" target="_blank">Trailer</a>
                </button>
            </div>
        </div>
    )
}

export default Movies;