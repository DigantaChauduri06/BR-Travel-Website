function Navber() {
  return (
    <nav className=" text-gray-600 h-20 items-center pt-2">
      <ul className="flex space-x-96 w-full p-4 items-center">
        <li className="w-full text-center sm:text-left sm:w-2/4 h-3">
          {
            //! Transition PROPERTY
          }
          <a
            href="#"
            className="font-bold text-3xl sm:text-left sm:ml-0 indent-2 hover:underline transition ease-in-out delay-150 hover:transition-all pt-7 font-Pacifico"
          >
            <span>BR</span> &nbsp; Tours and Travels
          </a>
        </li>
        <div className="sm:flex space-x-52 hidden">
          <li className="h-3">
            <a href="#" className="font-bold text-xl indent-2">
              Gallery
            </a>
          </li>
          <li className="h-3">
            <a href="#" className="font-bold text-xl indent-2">
              About
            </a>
          </li>
          <li className="h-3">
            <a href="#" className="font-bold text-xl indent-2 pr-4">
              Contact
            </a>
          </li>
        </div>
      </ul>
    </nav>
  );
}
export default Navber;
