import { useEffect } from "react";
import { useState } from "react";

import { toast } from "react-toastify";


import './styles.css';

const Favorites = () => {
    
    const [favorites, setFavorites] = useState([]);

    const getFavorites = () => {
        const favoritesList = localStorage.getItem('@geekMovies');
        setFavorites(JSON.parse(favoritesList) || [])
    }

    const deleteMovie = (id) => {
        let filter = favorites.filter((item)=>{
            return item.id !== id
        })
        setFavorites(filter)
        localStorage.setItem('@geekMovies', JSON.stringify(filter))
        toast.success('Filme removido com sucesso!');
    }

    useEffect(()=>{
        getFavorites();
    },[])

    return(
        <div className="favorites-container">
            <h1>Favoritos</h1>
            {favorites.length === 0 && <span>Você não salvou nenhum filme ainda :(</span>}
            <ul>
                {favorites.map((item) => {
                    return(
                        <li key={item.id}>
                            <span>{item.title}</span>
                            <div className="area-action">
                                <a href="">Ver detalhes</a>
                                <button onClick={() => deleteMovie(item.id)}>Excluir</button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Favorites;