import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { languageContext } from "../contexts/language";

const Header = () => {
  const counter = useSelector((state) => state.count);
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              {/* <li class="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/"
                >
                  Home
                </NavLink>
              </li> */}

              <li class="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/movies"
                >
                  Movies
                </NavLink>
              </li>

              {/* <li class="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/login"
                >
                  Login
                </NavLink>
              </li> */}
              {/* <li class="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/signup"
                >
                  Sign Up
                </NavLink>
              </li> */}
              {/* <li class="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/products"
                >
                  product
                </NavLink>
              </li> */}
              <li class="nav-item">
                <NavLink
                  style={({ isActive }) =>
                    isActive ? { color: "blue" } : undefined
                  }
                  className="nav-link"
                  to="/favmovies"
                >
                  Favourites {counter}
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
