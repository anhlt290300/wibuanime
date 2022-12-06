import React from 'react'
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Header from './component/Header'
import Home from "./pages/Home";
import Movies from './pages/Movies';
import Movie from './component/Movie';
import MovieWatch from './component/MovieWatch';
import ErrorPage from './component/ErrorPage';
import ScrollStartBtn from './component/ScrollStartBtn';
const LayOut = () => {
  return (
    <div >
      <Header />
      <div className='pt-[5rem] px-[3rem] '>
        <Outlet />
      </div>
      <ScrollStartBtn />
    </div>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />} >
          <Route index element={<Home />} />
          <Route path=':animeTitle/full' element={<Movie />} />
          <Route path=':animeTitle' element={<Movies />} />
          <Route path=':animeTitle/:episode' element={<MovieWatch />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='error-page' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App