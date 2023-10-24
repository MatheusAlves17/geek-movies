import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home, Movies } from "./pages"

const RoutesApp = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/filmes/:id' element={<Movies/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default RoutesApp;