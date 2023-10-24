import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Movies } from "./pages"
import { Header } from "./components";

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filmes/:id' element={<Movies/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;