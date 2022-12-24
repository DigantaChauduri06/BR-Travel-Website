function Description({ info, infoError, loading, place_name }) {
  if (infoError !== null)
    return (
      <p className="text-red-500 text-center w-full font-semibold text-4xl">
        {infoError}
      </p>
    );
  return (
    <div className="px-10 sm:px-20 border-2 pb-5">
      <h1 className="text-3xl sm:text-4xl text-center my-5 font-Poppins font-semibold underline">
        Description About <em>{place_name}</em>
      </h1>
      <p className="text-sm sm:text-lg font-Poppins">{info}</p>
    </div>
  );
}
export default Description;
