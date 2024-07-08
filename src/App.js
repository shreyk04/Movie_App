import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Card from "./pages/Card/Card";
import Body from "./pages/Body/Body";
// import MovieDetail from './Components/MovieDetail';
import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./Components/MovieDetail/MovieDetail";
import MovieCastDetail from "./Components/MovieCastDetail";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        {/* <Body/> */}
        {/* <Home /> */}
        <Routes>
          <Route index element={<Body />}></Route>
          <Route path="movie/:id" element={<MovieDetail />}></Route>
          <Route path="movies/:type" element={<MovieList />}></Route>
          <Route path="/*" element={<Home />}></Route>
          <Route
            path="movie/:id/castDetail"
            element={<MovieCastDetail />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
