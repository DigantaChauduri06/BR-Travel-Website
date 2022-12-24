import ImageCard from "./ImageCard";

function Images({ images, place_name }) {
  return (
    <div>
      <h2 className="text-3xl sm:text-4xl text-center my-5 font-Poppins font-semibold underline">
        Images About {place_name}
      </h2>
      <div className="block w-full ml-4 sm:grid sm:gap-5 sm:grid-cols-3 sm:grid-rows-3 sm:ml-20">
        {images && images.map((item) => <ImageCard key={item} item={item} />)}
      </div>
    </div>
  );
}
export default Images;
