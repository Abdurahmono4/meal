import { Link } from "react-router-dom";

import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";
import { useState } from "react";
import { useEffect } from "react";

const themes = { winter: "winter", dracula: "dracula" };

function darkModeFromLocalStorage() {
  return localStorage.getItem("mode") || themes.winter;
}

function Navbar() {
  const [theme, setTheme] = useState(darkModeFromLocalStorage());
  console.log(theme);

  const handleClick = () => {
    const newTheme = theme == themes.winter ? themes.dracula : themes.winter;
    setTheme(newTheme);
    console.log(setTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("mode", theme);
  }, [theme]);

  return (
    <div className="flex justify-between max-w-screen-lg w-full mx-auto mt-10 btn-lg mb-10">
      <Link to="/" className="btn btn-primary font-bold text-2xl">
        myK
      </Link>
      <div className="flex gap-10 items-center">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={handleClick} />

          {/* sun icon */}
          <IoSunnyOutline className="w-8 h-8 swap-on fill-current" />

          {/* moon icon */}
          <IoMoonOutline className="w-8 h-8 swap-off fill-current" />
        </label>

        <Link to="/create" className="btn btn-neutral">
          Create
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
