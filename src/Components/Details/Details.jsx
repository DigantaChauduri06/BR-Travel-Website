import axios from "axios";
import React from "react";
import { useParams } from "react-router-dom";
import { HashLoader } from "react-spinners";
import Description from "./Description";
import Images from "./Images";

function Details() {
  const { place_name } = useParams();
  const [info, setInfo] = React.useState("");
  const [infoError, setInfoError] = React.useState(null);
  const [images, setImages] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const fetchdata = async () => {
      setLoading(true);
      try {
        const data = await (
          await axios.get(
            `https://br-travel-app-backend-production.up.railway.app/description/${place_name}`
          )
        ).data;
        const Images = await (
          await axios.get(
            `https://br-travel-app-backend-production.up.railway.app/images/${place_name}`
          )
        ).data;
        setInfo(data.data);
        setImages(Images.photos);
        setLoading(false);
      } catch (e) {
        setInfo("");
        setInfoError("Internal server error! 501");
        setLoading(false);
      }
    };
    fetchdata();
  }, []);
  if (loading)
    return (
      <HashLoader
        size={150}
        color="#ad0cf2"
        style={{
          display: "block",
          textAlign: "center",
        }}
      />
    );
  return (
    <div className="h-full bg-blue-50">
      <Description
        info={info}
        loading={loading}
        infoError={infoError}
        place_name={place_name}
      />
      <Images images={images} place_name={place_name} />
    </div>
  );
}
export default Details;
