import { Link } from "react-router-dom";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

const themes = {
  winter: "winter",
  dracula: "dracula",
};

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function Navbar() {
  const [theme, setTheme] = useState(darkModeFromLocalStorage());
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className="navbar mb-10">
      <div className="max-w-screen-lg w-full  mx-auto flex justify-between items-center ">
        <Link
          className="btn btn-primary btn-lg font-bold text-2xl px-2 "
          to="/"
        >
          MyK
        </Link>

        <div className="flex gap-10 items-center">
          <label htmlFor="" className=" swap swap-rotate">
            <input
              type="checkbox"
              defaultChecked={theme == "winter " ? false : true}
            />

            {/**sun icon */}
            <IoSunnyOutline className="swap-on fill-current w-8 h-8" />
            {/**moon icon */}
            <IoMoonOutline className="swap-off fil-current w-8 h-8 " />
          </label>
          <Link className="btn btn-secondary" to="/create">
            Create
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
