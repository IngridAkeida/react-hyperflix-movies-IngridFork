import { Routes, Route, BrowserRouter } from "react-router-dom";
import MovieContextProvider from "./context/MovieContextProvider";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";


function App() {
  return (
    <div>
      <MovieContextProvider>
        <BrowserRouter>
        <Navbar/>
        <div style={{ color: 'white'}}>
          <Routes /*location={previousLocation || location}*/>
            <Route path="/" element={ <Home /> } />
            <Route path="/movie/:id" element={ <Details /> } />
          </Routes>
        </div>
        <Footer />
        </BrowserRouter>
      </MovieContextProvider>
    </div>
  )
}

export default App