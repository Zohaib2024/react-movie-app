import { Route, Routes } from "react-router-dom";
import Homepage from "./Homepage";
import Moviespage from "./Moviespage";
import Priceingpage from "./Priceingpage";
import Contactpage from "./Contactpage";
import Header from "./Header";
import SiteFooter from "./SiteFooter";
import MovieDetails from "./MovieDetails";
import LoginPage from "./Loginpage";

function App() {
  return (
    <>
      <link rel="icon" href="/images/F.png"></link>
      <title>Filmy </title>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movies" element={<Moviespage />} />

        <Route path="/Pricing" element={<Priceingpage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/movies/:slug" element={<MovieDetails />} />
        <Route path="/movies/search/:query?" element={<Moviespage />} />

        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="/movies" element={<Movies />} />
      <Route path="/series" element={<Series />} />
      <Route path="/contact" element={<Contact />} /> */}
        {/* Add more routes if needed */}
      </Routes>
      <SiteFooter />
    </>
  );
}

export default App;
