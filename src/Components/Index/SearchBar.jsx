import { useState } from "react";
import SearchIcon from "../../Assets/search.svg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SearchBar({ setCity, setURL }) {
  const [text, setText] = useState("");
  const navigate = useNavigate();
  return (
    <div className="absolute top-2/4 left-14 sm:left-1/4 flex ">
      <input
        type="text"
        className="border border-black rounded-md sm:w-700 sm:h-12 sm:mr-7 sm:p-4 p-1 pl-3"
        placeholder=" Search some places..."
        onChange={(e) => setText(e.target.value)}
        onKeyPress={(e) => {
          if (e.key === "Enter") {
            navigate(`/${text}`);
          }
        }}
      />
      <Link to={`/${text}`} className="ml-3 sm:ml-0">
        <img
          src={SearchIcon}
          style={{ filter: "invert(1)" }}
          className="cursor-pointer"
        />
      </Link>
    </div>
  );
}
export default SearchBar;
