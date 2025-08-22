import "./CarousalMovie.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { NavLink } from "react-router-dom";

const CarousalMovies = () => {
  return (
    <div>
      <Carousel
        showStatus={false}
        infiniteLoop={true}
        transitionTime={800}
        showArrows={true}
        showIndicators={false}
        showThumbs={false}
        autoPlay={true}
        interval={3000}
        stopOnHover={true}
        swipeable={true}
        emulateTouch={true}
        dynamicHeight={false}
      >
        {/* Slide 1 */}
        <div className="relative w-full">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
            src="//images.moviesanywhere.com/8b2c1b0ab5d8002011684787d4a666a1/068ab75c-2599-45a6-8fed-499d7eb15e1e.jpg?r=3x1&w=2400"
            alt="Slide 1"
          />
          {/* Overlay content */}
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
            <h1 className=" hidden md:block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              Welcome to Movie World
            </h1>
            <p className="hidden md:block text-sm sm:text-base md:text-lg mt-2 text-white drop-shadow-md">
              Stream your favorite movies anytime
            </p>
            <NavLink to="/login">
              <button className="mt-3 sm:mt-4 bg-red-600 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Watch Now
              </button>
            </NavLink>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative w-full">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
            src="//images.moviesanywhere.com/1c166508a86d3db1ad9783f6006a3725/0a9e0ae0-07ae-4e2a-a5bf-e94de5b030de.jpg?r=3x1&w=2400"
            alt="Slide 2"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
            <h1 className=" hidden md:block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              Welcome to Movie World
            </h1>
            <p className="hidden md:block text-sm sm:text-base md:text-lg mt-2 text-white drop-shadow-md">
              Stream your favorite movies anytime
            </p>
            <NavLink to="/login">
              <button className="mt-3 sm:mt-4 bg-red-600 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Watch Now
              </button>
            </NavLink>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative w-full">
          <img
            className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
            src="//images.moviesanywhere.com/9b021f340294894e9b3912791f30a69e/ffa6b40e-3fba-47c2-8ec8-4aab79920bea.jpg?r=3x1&w=2400"
            alt="Slide 3"
          />
          <div className=" absolute inset-0 flex flex-col justify-center items-center text-center px-4 sm:px-6">
            <h1 className=" hidden md:block text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white drop-shadow-lg">
              Welcome to Movie World
            </h1>
            <p className="hidden md:block text-sm sm:text-base md:text-lg mt-2 text-white drop-shadow-md">
              Stream your favorite movies anytime
            </p>
            <NavLink to="/login">
              <button className="mt-3 sm:mt-4 bg-red-600 text-sm sm:text-base md:text-lg px-4 sm:px-6 py-2 rounded-lg hover:bg-red-700 transition duration-300">
                Watch Now
              </button>
            </NavLink>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarousalMovies;
