import Head from "next/head";
import React, { useEffect, useState, Fragment } from "react";
import styles from "../../styles/login.module.css";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import Image from "next/image";
import Logo from "../../assets/images/logo/logo-white.svg";
import { postLogin } from "../../configs/redux/Slice/LoginSlice";
import { Provider } from "react-redux";
import store from "../../configs/redux/store";
import Cookies from "js-cookie";

const Login = () => {
  const router = useRouter();

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
    //console.log(data);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3200/users/login", JSON.stringify(data), {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data.statusCode === 201) {
          toast.success("Welcome, " + res.data.data.name, { autoClose: 2500 });
          console.log(res.data.token);
          Cookies.set("token", res.data.data.token);
          Cookies.set("refreshToken", res.data.data.refreshToken);
          Cookies.set("role", res.data.data.role);
          Cookies.set("id", res.data.data.id);
          setTimeout(() => {
            router.push("/home");
          }, 1500);
        } else {
          toast.warning(res.data.message, { autoClose: 2500 });
        }
      })
      .catch((err) => {
        if (err.response) {
          toast.warning(err.response.data.message, { autoClose: 2500 });
        }
        //  console.log(err)
      });
  };

  useEffect(() => {
    document.title = "Sign In | JobSeek";
  });

  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Fragment>
        <Provider store={store} />
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
              <form onSubmit={handleLogin} className="w-100 form-sign-up">
                <div className="text-center">
                  <h2 className="text-warning">Halo, Pewpeople</h2>
                  <h6 className="text-muted">
                    Lorem ipsum sit amet, consectetur adipiscing elit. In
                    euismod ipsum et dui dui rhocus auctor
                  </h6>
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

                <div className="d-flex justify-content-center mb-2">
                  <button
                    type="form-input submit"
                    className="btn btn-warning my-2 text-light"
                  >
                    Login
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

export default Login;
