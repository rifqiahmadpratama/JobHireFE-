import Head from "next/head";
import React, { useEffect, useState, Fragment } from "react";
import { toast } from "react-toastify";
import Image from "next/image";

import styles from "../../styles/login.module.css";
import { useRouter } from "next/router";
import axios from "axios";

import Logo from "../../assets/images/logo/logo-white.svg";
const Register = () => {
  const router = useRouter();

  const [dataUser, setDataUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirm_password: "",
    role: "" || "user",
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
    console.log(dataUser);
  };

  const handleCreate = async (e) => {
    await e.preventDefault();

    if (dataUser.confirm_password.match(dataUser.password)) {
      await axios
        .post(
          "http://localhost:3200/users/register",
          JSON.stringify(dataUser),
          {
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          if (res.data.statusCode === 201) {
            toast.success("Sign Up Success. wait a few seconds", {
              autoClose: 2500,
            });
            setTimeout(() => {
              router.push("/login");
            }, 2500);
          } else {
            toast.warning(res.data.message, { autoClose: 2500 });
          }
        })
        .catch((err) => {
          toast.warning(err.response.data.message, { autoClose: 2500 });
        });
    } else {
      toast.warning("Password Not Match", {
        autoClose: 2000,
        toastId: "warningNotMatchPassword",
      });
    }
  };

  const [toggle, setToggle] = useState(true);

  const handleClick = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    document.title = "Sign Up | JobSeek";
  });

  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Register</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fragment>
        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-6">
              <div className={styles.backdroplogin}>
                <div className="mt-4 me-3">
                  <Image
                    className={styles.logo}
                    src={Logo}
                    height={30}
                    alt="Logo"
                  />
                </div>
                <div className="mt-5 py-5">
                  <h1 className="text-white mx-5">
                    Temukan developer berbakat & terbaik di berbagai bidang
                    keahlian
                  </h1>
                </div>
              </div>
            </div>
            <div className="col-6">
              <form onSubmit={handleCreate} className="w-100 form-sign-up">
                <div className="text-center">
                  <h2 className="text-warning">Halo, Pewpeople</h2>
                  <h6 className="text-muted">
                    Lorem ipsum sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui dui rhocus auctor
                  </h6>
                </div>
                <div className="mb-2">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-input form-control"
                    id="name"
                    placeholder="Enter Name"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="form-input form-control"
                    id="email"
                    placeholder="Enter Email address"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="phone" className="form-label">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phone"
                    className="form-input form-control"
                    id="phone"
                    placeholder="08xxxxxxxxxx"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="form-input form-control"
                    id="password"
                    placeholder="Enter Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="mb-2">
                  <label htmlFor="confirm_password" className="form-label">
                    Confirmation Password
                  </label>
                  <input
                    type="password"
                    name="confirm_password"
                    className="form-control"
                    id="confirm_password"
                    placeholder="Enter Confirmation Password"
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-start mb-4">
                  <input
                    className="form-input form-check-input"
                    type="checkbox"
                    value=""
                    id="agree-user"
                    onChange={handleChange}
                  />
                  <label className="form-check-label" htmlFor="agree-user">
                    &nbsp; I agree to terms & conditions
                  </label>
                </div>
                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="form-input submit"
                    className="btn btn-warning my-2 text-light"
                  >
                    Register
                  </button>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <p className="text-muted">Already have account?</p>
                  {/* <Link className="text-warning text-decoration-none" to={"../sign-in"}>
                    &nbsp;Log in Here
                  </Link> */}
                </div>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Register;
