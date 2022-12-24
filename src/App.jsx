import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Index from "./Pages/index";
// import Description from "./Components/Index/Description";
import Details from "./Components/Details/Details";

function App() {
  const [city, setCity] = React.useState("");
  const [URL, setURL] = React.useState(
    "https://br-travel-app-backend-production.up.railway.app"
  );
  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path="/"
          element={<Index city={city} setCity={setCity} setURL={setURL} />}
        />
        <Route path="/:place_name" element={<Details />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;

// React.useEffect(() => {
//   const fetchdata = async () => {
//     const data = await (
//       await axios(
//         "https://br-travel-app-backend-production.up.railway.app/images/kolkata"
//       )
//     ).data;
//     setDescription(data);
//   };
//   fetchdata();
// }, []);
