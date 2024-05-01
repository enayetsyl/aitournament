import { useEffect, useRef, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi"
import { NavLink } from "react-router-dom"


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex justify-between items-center py-10 px-5 text-white">
        <h1 className="font-bold text-4xl  uppercase">Ai Tournament</h1>
        <div className="">
          <div className="hidden lg:block ">
            <ul className="flex justify-center items-center gap-5 cursor-pointer">
              <li className="cursor-pointer"> <NavLink to='/'>Tournament</NavLink></li>
              <li className="cursor-pointer"><NavLink to='/teams'>Teams</NavLink></li>
              <li className="cursor-pointer"><NavLink to='/standing'>Standing</NavLink></li>
            </ul>
          </div>
           {/* menu small screen */}
           <div className="lg:hidden relative" ref={dropdownRef}>
          <div className="text-xl text-accent border border-accent px-5 py-1 rounded-md" onClick={toggleDropdown}>
          <GiHamburgerMenu />
          </div>
          {isDropdownOpen && (
              <div className="absolute top-8 w-32 right-0 bg-blue-500 p-5 ">
                <ul className="flex flex-col gap-5 cursor-pointer">
              <li className="cursor-pointer"> <NavLink to='/'>Tournament</NavLink></li>
              <li className="cursor-pointer"><NavLink to='/teams'>Teams</NavLink></li>
              <li className="cursor-pointer"><NavLink to='/standing'>Standing</NavLink></li>
            </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar