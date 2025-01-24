import { BrowserRouter, Routes, Route, } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import 'bootstrap/dist/css/bootstrap.min.css'

const urlBE = import.meta.env.VITE_BACKEND_URL;

const App = () =>{


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element= {<AppLayout/>}>
          <Route path = '/' element = {<HomePage/>}></Route>
          <Route path = '/movies' element = {<MoviesPage/>}></Route>
              
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
