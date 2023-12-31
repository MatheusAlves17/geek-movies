import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Erro, Favorites, Home, Movies } from "./pages"
import { Header } from "./components";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filmes/:id' element={<Movies/>} />
                <Route path='/favoritos' element={<Favorites/>} />
                <Route path="*" element={<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;