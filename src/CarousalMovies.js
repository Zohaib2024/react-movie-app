import "./CarousalMovie.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

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
        <div className="relative">
          <img
            src="//images.moviesanywhere.com/8b2c1b0ab5d8002011684787d4a666a1/068ab75c-2599-45a6-8fed-499d7eb15e1e.jpg?r=3x1&w=2400"
            alt="Slide 1"
          />
          {/* Overlay content */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
            <h1 className="text-3xl font-bold">Welcome to Movie World</h1>
            <p className="text-lg mt-2">Stream your favorite movies anytime</p>
            <button className="mt-4 bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
              Watch Now
            </button>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            src="//images.moviesanywhere.com/1c166508a86d3db1ad9783f6006a3725/0a9e0ae0-07ae-4e2a-a5bf-e94de5b030de.jpg?r=3x1&w=2400"
            alt="Slide 2"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
            <h1 className="text-3xl font-bold">Welcome to Movie World</h1>
            <p className="text-lg mt-2">Stream your favorite movies anytime</p>
            <button className="mt-4 bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
              Watch Now
            </button>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            src="//images.moviesanywhere.com/9b021f340294894e9b3912791f30a69e/ffa6b40e-3fba-47c2-8ec8-4aab79920bea.jpg?r=3x1&w=2400"
            alt="Slide 3"
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-center">
            <h1 className="text-3xl font-bold">Welcome to Movie World</h1>
            <p className="text-lg mt-2">Stream your favorite movies anytime</p>
            <button className="mt-4 bg-red-600 px-6 py-2 rounded-lg hover:bg-red-700">
              Watch Now
            </button>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarousalMovies;
