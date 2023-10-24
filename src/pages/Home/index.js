import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import api from '../../services/api';

import './styles.css';

const Home = () => {

    const [movies, setMovies] = useState([]);

    useEffect(()=>{
        async function loadMovies(){
            const { data } = await api.get('movie/now_playing',{
                params: {
                    api_key: '3a963db3747a0bcd5b77bea8cc7b930b',
                    language: 'pt-BR',
                    page: 1
                }
            })
            setMovies(data.results.slice(0,10))
            console.log('chegou',movies);
        }
        loadMovies()
    },[])
    return(
        <div className="container">
            <div className="movies-list">
                {
                    movies.map((item)=>{
                        return(
                            <article key={item.id}>
                                <strong>{item.title}</strong>
                                <img src={`https://image.tmdb.org/t/p/original${item.poster_path}`} alt={item.title} className="cover-movie" />
                                <Link to={`/filmes/${item.id}`}>Ver detalhes</Link>
                            </article>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;