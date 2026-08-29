/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Navbar = () => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };

  // Submenu State for Mobile/Desktop toggle
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const toggleSubmenu = (e) => {
    e.preventDefault();
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  React.useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveSearchModal(true);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    const handleScroll = () => {
      if (!elementId) return;
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState(true);
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              {/* Original Logos Preserved */}
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/white-logo.png"
                  className="main-logo"
                  alt="logo"
                />
                <img
                  src="/images/black-logo.png"
                  className="optional-logo"
                  alt="logo"
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div
                className={classOne}
                id="navbarSupportedContent"
                style={{ visibility: "visible" }}
              >
                <ul className="navbar-nav">
                  {/* Services Parent Dropdown */}
                  <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath === "/services/" ? "active" : ""
                      }`}
                    >
                      Services <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      {/* Core Services */}
                      <li className="nav-item">
                        <Link
                          href="/mental-health/"
                          className={`nav-link ${
                            currentPath === "/mental-health/" ? "active" : ""
                          }`}
                        >
                          Mental Health Support
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/supported-independent-living/"
                          className={`nav-link ${
                            currentPath === "/supported-independent-living/"
                              ? "active"
                              : ""
                          }`}
                        >
                          Supported Independent Living
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/respite-accommodation/"
                          className={`nav-link ${
                            currentPath === "/respite-accommodation/"
                              ? "active"
                              : ""
                          }`}
                        >
                          Respite/Short Stay Accommodation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/community-participation/"
                          className={`nav-link ${
                            currentPath === "/community-participation/"
                              ? "active"
                              : ""
                          }`}
                        >
                          Community Participation
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/psycho-social-recovery/"
                          className={`nav-link ${
                            currentPath === "/psycho-social-recovery/"
                              ? "active"
                              : ""
                          }`}
                        >
                          Psycho-Social Recovery
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/support-daily-task/"
                          className={`nav-link ${
                            currentPath === "/support-daily-task/"
                              ? "active"
                              : ""
                          }`}
                        >
                          Support with Daily Tasks
                        </Link>
                      </li>

                      {/* Divider */}
                      <li className="dropdown-divider"></li>

                      {/* Nested Submenu: Additional Services */}
                      <li className={`nav-item dropdown-submenu ${isSubmenuOpen ? 'show' : ''}`}>
                        <a
                          href="#"
                          className="nav-link dropdown-toggle d-flex align-items-center justify-content-between"
                          onClick={toggleSubmenu}
                        >
                          <span>
                            Additional Services
                            <span className="badge bg-primary ms-2" style={{ fontSize: '10px' }}>
                              Specialized
                            </span>
                          </span>
                          <i className={`fas ${isSubmenuOpen ? 'fa-chevron-down' : 'fa-chevron-right'} ms-2`}></i>
                        </a>

                        <ul className={`dropdown-menu ${isSubmenuOpen ? 'show' : ''}`}>
                          <li className="nav-item">
                            <Link
                              href="/drug-and-alcohol-support/"
                              className={`nav-link ${
                                currentPath === "/drug-and-alcohol-support/" ? "active" : ""
                              }`}
                            >
                              Drug & Alcohol
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/counselling/"
                              className={`nav-link ${
                                currentPath === "/counselling/" ? "active" : ""
                              }`}
                            >
                              Counselling
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/homelessness-support/"
                              className={`nav-link ${
                                currentPath === "/homelessness-support/" ? "active" : ""
                              }`}
                            >
                              Homelessness Support
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/domestic-violence-support/"
                              className={`nav-link ${
                                currentPath === "/domestic-violence-support/" ? "active" : ""
                              }`}
                            >
                              Domestic Violence Support
                            </Link>
                          </li>
                          <li className="nav-item">
                            <Link
                              href="/youth-services/"
                              className={`nav-link ${
                                currentPath === "/youth-services/" ? "active" : ""
                              }`}
                            >
                              Youth Services
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>

                  {/* About Us */}
                  <li className="nav-item">
                    <Link
                      href="/about/"
                      className={`nav-link ${
                        currentPath === "/about/" ? "active" : ""
                      }`}
                    >
                      About Us
                    </Link>
                  </li>

                  {/* Blog */}
                  <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentPath === "/blog/" ? "active" : ""
                      }`}
                    >
                      Blog
                    </Link>
                  </li>
                </ul>

                {/* Right Options */}
                <div className="others-options">
                  <div className="option-item">
                    <button
                      type="button"
                      className="search-btn flaticon-search border-0 bg-transparent p-0"
                      onClick={handleToggleSearchModal}
                      aria-label="Open site search"
                    ></button>
                  </div>

                  <Link href="/contact-us" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form Modal */}
      <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const value = e.currentTarget.elements.search.value.trim();
                  router.push(value ? `/search/?q=${encodeURIComponent(value)}` : "/search/");
                  setActiveSearchModal(true);
                }}
              >
                <label htmlFor="navbar-search" className="sr-only">
                  Search the site
                </label>
                <input
                  id="navbar-search"
                  name="search"
                  type="search"
                  className="input-search"
                  placeholder="Search here..."
                  autoComplete="off"
                />
                <button type="submit" aria-label="Submit search">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;