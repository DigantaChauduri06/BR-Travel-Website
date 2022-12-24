import Banner from "../../Assets/bg-first.jpg";
import SearchBar from "./SearchBar";

function Hero({ city, setCity, setURL }) {
  return (
    <div>
      <div className="p-4">
        <img
          src={Banner}
          loading="lazy"
          className="h-90vh w-screen shadow-lg shadow-gray-500/40 rounded opacity-90"
        />
      </div>
      <SearchBar setCity={setCity} city={city} />
    </div>
  );
}
export default Hero;
