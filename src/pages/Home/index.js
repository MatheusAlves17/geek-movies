import { useState } from "react";
import { useEffect } from "react";

import api from '../../services/api';


const Home = () => {
    useEffect(()=>{
        async function loadMovies(){
            const { data } = await api.get('movie/now_playing',{
                params: {
                    api_key: '3a963db3747a0bcd5b77bea8cc7b930b',
                    language: 'pt-BR',
                    page: 1
                }
            })
            console.log('chegou',data);
        }
        loadMovies()
    },[])
    return(
        <h1>
            Home
        </h1>
    )
}

export default Home;