function ImageCard({ item }) {
  return (
    <img
      src={item}
      loading="lazy"
      className="w-96 h-96 border-4 mb-3 sm:mb-0 border-y-slate-600 rounded-md"
    />
  );
}
export default ImageCard;
