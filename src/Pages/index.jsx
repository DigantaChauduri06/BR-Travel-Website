import React from "react";

import Navber from "../Components/Index/Navber";
import Hero from "../Components/Index/Hero";

function Index({ city, setCity, setURL }) {
  return (
    <div>
      <Navber />
      <Hero city={city} setCity={setCity} setURL={setURL} />
    </div>
  );
}
export default Index;
