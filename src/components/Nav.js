import React from "react";
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
            <ul className="navbar__right">
              <li>
                <a href="/">Home</a>
              </li>
             
              <li>
                <a href="/">Projects</a>
              </li>
              <li>
                <a href="/">Blog</a>
              </li>
              {/* <li>
                <a href="">Download cv </a>
              </li> */}
            </ul>
          )
        </div>
      </div>
    
    </nav>
  );
};

export default Nav;
