import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <!-- Navigation--> */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light ">
        <div className="container px-4 px-lg-5">
          <a href="/">
            <img src="https://www.uniqlo.com/jp/ja/contents/feature/common/icons/header.svg" />
          </a>

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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
              <li className="nav-item">
                <NavLink to="/" className="nav-link active text-dark" aria-current="page">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/product" className="nav-link active text-dark" aria-current="page">
                  All Product
                </NavLink>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
