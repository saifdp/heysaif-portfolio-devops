import React from 'react'
// import skillone from './images/skillone.png'
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom"
import { HashLink } from 'react-router-hash-link'; 
import "./DarkMode.css";
 

function Navbar() {

    const setDark = () => {
        localStorage.setItem("theme", "dark");
        document.documentElement.setAttribute("data-theme", "dark");
      };
      
      const setLight = () => {
        localStorage.setItem("theme", "light");
        document.documentElement.setAttribute("data-theme", "light");
      };
      
      const storedTheme = localStorage.getItem("theme");
      
      const prefersDark =
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      
      const defaultDark =
        storedTheme === "dark" || (storedTheme === null && prefersDark);
      
      if (defaultDark) {
        setDark();
      }
      
      const toggleTheme = (e) => {
        if (e.target.checked) {
          setDark();
        } else {
          setLight();
        }
      };
    return (

        <div className="container-fluid">
            <navbar className="navbar  navbar-expand-lg " >
                <div className="container">
                <HashLink className="navbar-brand" to="#homepage" >
                     <p>heysaif.com</p>
                     </HashLink>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                            <HashLink className="nav-link  " aria-current="page" smooth  to="/"  >
                                    HOME
                                    </HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink className="nav-link"  smooth to="#Aboutpage">
                                ABOUT
                                </HashLink>
                            </li>
                            <li className="nav-item"  >
                                <HashLink className="nav-link"  smooth to="#workpage" >
                                 WORK
                                 </HashLink>

                            </li>
                            <li className="nav-item">
                            <HashLink  className="nav-link"  smooth  to="#myfourthpage">
                                SKILLS
                                </HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink className="nav-link" to="#messagepage" >
                              CONTACT
                              </HashLink>
                            </li>
                            <li className="nav-item">
                            <HashLink className="nav-link" to={"https://heysaif.tech"}  rel="noopener noreferrer" >
                            BLOGS
                              </HashLink>
                            </li>

                        </ul>
                        <div className="toggle-theme-wrapper">
      <span>☀️</span>
      <label className="toggle-theme" htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={toggleTheme}
          defaultChecked={defaultDark}
        />
        <div className="slider round"></div>
      </label>
      <span>🌒</span>
    </div>
                        
                        
                    </div>
                </div>
            </navbar>
        </div>

    );
}


export default Navbar