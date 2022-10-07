import React, { useState, Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import axios from "axios";
import style from "../../styles/Navbar.module.css";
import ImageNavbar from "../../assets/images/logo/logo-purple.svg";
import IconSearch from "../../assets/images/icons/search.svg";
import PhotoEmpty from "../../assets/images/1_home.png";
import Cookies from "js-cookie";

const NavBar = () => {
  const user_picture = "";
  const [isAuth, setIsAuth] = useState("");
  const router = useRouter();

  const expand = "lg";
  function getWindowSize() {
    const { innerWidth, innerHeight } = typeof window;
    return { innerWidth, innerHeight };
  }
  const handleLogout = () => {
    setIsAuth("");
    Cookies.remove("token");
    Cookies.remove("refreshToken");
    Cookies.remove("role");
    Cookies.remove("id");
  };
  const pictureThumbnails = (
    <span>
      <Image
        className="pictureThumbnails"
        referrerPolicy="no-referrer"
        src={
          user_picture === null || user_picture === undefined
            ? { PhotoEmpty }
            : { user_picture }
        }
        alt=""
      />
    </span>
  );
  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [show, setShow] = useState(false);
  const toggleOffcanvas = () => {
    setShow(!show);
  };
  const getDataProfile = async () => {
    if (isAuth) {
      await axios
        .get(process.env.REACT_APP_API_BACKEND + "users/profile", {
          headers: {
            Authorization: `Bearer ${isAuth}`,
            "Access-Control-Allow-Origin": "*",
            // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
          },
        })
        .then((response) => {
          setProfileUser(response.data.data);
          //   console.log(response.data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  useEffect(() => {
    getDataProfile();
    setIsAuth(Cookies.get("token"));
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, [isAuth]);
  return (
    <Fragment>
      <Navbar
        key={expand}
        bg="white"
        expand={expand}
        className="shadow-sm mb-3"
      >
        <Container fluid="sm">
          <Navbar.Brand className="me-5">
            <div
              onClick={() => router.push("/home")}
              className="col-lg-3 col-md-3 col-sm-3  cursor-pointer"
            >
              <div className={style.logonavbar}>
                <Image
                  className="my-auto logo-toggle-navbar"
                  src={ImageNavbar}
                  alt=""
                />
              </div>
            </div>
          </Navbar.Brand>
          <Navbar.Toggle />

          <Navbar.Offcanvas
            // show={show}
            id={`offcanvasNavbar-expand-${"expand"}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="top"
          >
            <Offcanvas.Header className="shadow-sm">
              <Offcanvas.Title
                id={`offcanvasNavbarLabel-expand-${expand}`}
                className="col-12 d-flex justify-content-between"
              >
                <div
                  onClick={() => router.push("/home")}
                  className="col-lg-3 col-md-3 col-sm-3 link-redirect"
                >
                  <div className={style.logonavbar}>
                    <Image
                      className="my-auto logo-toggle-navbar"
                      src={ImageNavbar}
                      alt=""
                    />
                  </div>
                </div>
                <div
                  className="btn-close-offcanvas "
                  // onClick={toggleOffcanvas}
                ></div>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {isAuth ? (
                <Fragment>
                  {/* Navbar User Auth */}
                  <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                    {windowSize.innerWidth <= 992 ? (
                      <Fragment>
                        <div className="col-xl-12 col-lg-12">
                          <Form
                            // onSubmit={handleSearchSubmit}
                            className="form-search d-flex"
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                //    onChange={handleSearch}
                              />
                              <Button
                                onClick={() => router.push("/job")}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <Image
                                  className=""
                                  src={IconSearch}
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>

                        <div className="d-grid ">
                          <div className="col-12 d-flex mt-4">
                            <div className="col-4 border border-0 rounded-3 d-flex justify-content-center align-items-center block">
                              <Image
                                referrerPolicy="no-referrer"
                                className="photoSide"
                                // src={user_picture} alt=""
                                src={
                                  user_picture === null ||
                                  user_picture === undefined
                                    ? { PhotoEmpty }
                                    : { user_picture }
                                }
                                alt=""
                              />
                            </div>
                            <div className="col-8 d-grid">
                              <Nav.Link>
                                <div className="col-12 d-grid mt-4">
                                  <Button
                                    variant="outline-warning"
                                    onClick={() => router.push("/profile")}
                                    className=" rounded-pill block  "
                                    type="button"
                                  >
                                    <p className="my-auto"> My Profile</p>
                                  </Button>
                                </div>

                                <div className="col-12 d-grid mt-4">
                                  <Button
                                    variant="outline-warning"
                                    onClick={() => router.push("/job")}
                                    className=" rounded-pill block  "
                                    type="button"
                                  >
                                    <p className="my-auto">Job</p>
                                  </Button>
                                </div>
                              </Nav.Link>
                            </div>
                          </div>

                          <div className="col-12 d-grid mt-4">
                            <Button
                              variant="warning"
                              onClick={() => {
                                handleLogout();
                                router.push("/login");
                                toggleOffcanvas();
                              }}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto">Logout</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="col-xl-8 col-lg-8">
                          <Form
                            // onSubmit={handleSearchSubmit}
                            className="form-search d-flex"
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                // onChange={handleSearch}
                              />
                              <Button
                                onClick={() => router.push("/job")}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <Image
                                  className=""
                                  src={IconSearch}
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>

                        <div className="col-xl-4 col-lg-4 d-flex">
                          <div className="col-12 d-flex justify-content-end align-items-center block">
                            <NavDropdown
                              title={pictureThumbnails}
                              align="end"
                              id={`offcanvasNavbarDropdown-expand-${expand}`}
                            >
                              <NavDropdown.Item
                                onClick={() => router.push("/profile")}
                              >
                                My Profile
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item
                                onClick={() => router.push("/job")}
                              >
                                Job
                              </NavDropdown.Item>
                              <NavDropdown.Divider />
                              <NavDropdown.Item
                                onClick={() => {
                                  router.push("/login");
                                  handleLogout();
                                }}
                              >
                                Logout
                              </NavDropdown.Item>
                            </NavDropdown>
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              ) : (
                <Fragment>
                  {/* Navbar User No Auth */}
                  <div className="col-12 d-xl-flex d-lg-flex d-md-grid d-sm-grid ">
                    {windowSize.innerWidth <= 992 ? (
                      <Fragment>
                        <div className="col-xl-12 col-lg-12">
                          <Form
                            // onSubmit={handleSearchSubmit}
                            className="form-search d-flex"
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                //  onChange={handleSearch}
                              />
                              <Button
                                onClick={() => router.push("/job")}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <Image
                                  className=""
                                  src={IconSearch}
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>
                        <div className="d-flex mt-4 ">
                          <div className="col-6 d-grid px-2">
                            <Button
                              variant="warning"
                              className=" rounded-pill block "
                              type="button"
                              onClick={() => router.push("/login")}
                            >
                              <p className="my-auto text-light">Login</p>
                            </Button>
                          </div>
                          <div className="col-6 d-grid">
                            <Button
                              variant="warning"
                              onClick={() => router.push("/register")}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto text-light"> Register</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    ) : (
                      <Fragment>
                        <div className="col-xl-8 col-lg-8 d-flex">
                          <Form
                            // onSubmit={handleSearchSubmit}
                            className="col-12 form-search d-flex "
                          >
                            <div className="col-12 d-flex border border-1 rounded-pill form-input">
                              <input
                                className="form-control rounded-pill border-0 "
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                                //    onChange={handleSearch}
                              />
                              <Button
                                onClick={() => router.push("/job")}
                                className="bg-transparent border-0 rounded-pill btn-search"
                                type="submit"
                              >
                                <Image
                                  className="my-0"
                                  src={IconSearch}
                                  alt="search"
                                />
                              </Button>
                            </div>
                          </Form>
                        </div>
                        <div className="col-xl-4 col-lg-4 d-flex mt-2">
                          <div className="col-6 d-grid px-2">
                            <Button
                              variant="warning"
                              onClick={() => router.push("/login")}
                              className=" rounded-pill block "
                              type="button"
                            >
                              <p className="my-auto text-light">Login</p>
                            </Button>
                          </div>
                          <div className="col-6 d-grid">
                            <Button
                              variant="warning"
                              onClick={() => router.push("/register")}
                              className=" rounded-pill block  "
                              type="button"
                            >
                              <p className="my-auto text-light"> Register</p>
                            </Button>
                          </div>
                        </div>
                      </Fragment>
                    )}
                  </div>
                </Fragment>
              )}
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default NavBar;
