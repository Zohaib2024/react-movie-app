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
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Movies" element={<Moviespage />} />

        <Route path="/Pricing" element={<Priceingpage />} />
        <Route path="/Contact" element={<Contactpage />} />
        <Route path="/movies/:slug" element={<MovieDetails />} />
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
