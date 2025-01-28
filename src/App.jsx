import { BrowserRouter, Routes, Route, } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import 'bootstrap/dist/css/bootstrap.min.css'
import SingleMoviePage from "./pages/SingleMoviePage"

const urlBE = import.meta.env.VITE_BACKEND_URL;

const App = () => {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path="/movies">
              <Route path="" element={<MoviesPage />} />
              <Route path=":id" element={<SingleMoviePage />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
