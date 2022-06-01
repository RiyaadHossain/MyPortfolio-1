import React from "react";

const Navbar = () => {
  return (
    <div class="navbar bg-base-100 container mx-auto sticky top-0 z-10">
      <div class="navbar-start">
        <div class="dropdown">
          <label tabindex="0" class="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="text-xl font-thin" href="/" to="/">
                Home
              </a>
            </li>
            <li>
              <a className="text-xl font-thin" href="#about" to="/about">
                About
              </a>
            </li>
            <li>
              <a className="text-xl font-thin" href="/" to="/">
                Skill
              </a>
            </li>
            <li>
              <a className="text-xl font-thin" href="/" to="/">
                Portfolio
              </a>
            </li>
            <li>
              <a className="text-xl font-thin" href="/" to="/">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <a
          href="/"
          to="/"
          class="text-white normal-case font-bold text-2xl"
        >
          Riyad Hossain
        </a>
      </div>
      <div class="navbar-end hidden lg:flex">
        <ul class="menu menu-horizontal p-0">
          <li>
            <a className="text-xl font-thin" href="#home" to="/">
              Home
            </a>
          </li>
          <li>
            <a className="text-xl font-thin" href="#about" to="/">
              About
            </a>
          </li>
          <li>
            <a className="text-xl font-thin" href="/" to="/">
              Skill
            </a>
          </li>
          <li>
            <a className="text-xl font-thin" href="/" to="/">
              Portfolio
            </a>
          </li>
          <li>
            <a className="text-xl font-thin" href="/" to="/">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
