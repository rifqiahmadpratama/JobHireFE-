import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Navbar from "../../components/navbar/index";
import axios from "axios";
import Porto from "../../components/portofolio/index";
import Pengalaman from "../../components/pengalamankerja/index";
import { useRouter } from "next/router";
import Image from "next/image";
import ImageProfile from "../../assets/images/profile.png";
import ImageEmail from "../../assets/images/icons/email.svg";
import style from "../../styles/Profile.module.css";
const Profile = () => {
  //   const router = useRouter();
  //   const [product, setProduct] = useState();
  //   useEffect(() => {
  //     const idProfile = router.query.id;
  //     console.log("data ID adalah = " + idProfile);
  //     axios
  //       .get("http://localhost:3004/users/" + idProfile)
  //       .then((res) => {
  //         console.log(res.data);
  //         setProduct(res.data);
  //       })
  //       .catch((error) => console.error("tes error = " + error));
  //   }, []);
  //   console.log(product);
  return (
    <div>
      <style global jsx>{`
        background-color: #e5e5e5;
      `}</style>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <Image
                    src={ImageProfile}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt="Profile"
                  />
                  <h3>Rifqi Ahmad Pratama</h3>
                  <h5>WebSite</h5>
                  <p>Bandung</p>
                  <p>Freelancer</p>
                  <p>Membuat WEBSITE</p>
                  <button
                    onClick={() =>
                      router.push({
                        pathname: "/edit-profile",
                      })
                    }
                    type="button"
                    className="btn btn-primary"
                  >
                    Hire
                  </button>
                  <h3>Skill</h3>
                  <div className="col-4 d-flex ">
                    {/* {product?.skill.length < 0 ? (
                      <div>Loading</div>
                    ) : (
                      product?.skill.map((item1, index) => (
                        <div key={index}>
                          <p className={style.skill}>{item1}</p>
                        </div>
                      ))
                    )} */}
                  </div>
                  <div className="d-flex">
                    <Image
                      src={ImageEmail}
                      layout="responsive"
                      width="1"
                      height="1"
                      alt="Profile"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-8">
              <h2>Hubungi Lous Tomlinson</h2>
              <p>
                Lorem ipsum sit amet, consectetur adipsing elit. IN euismod
                ipsum
              </p>
              <div className="mb-2">
                <label htmlFor="nama" className="form-label">
                  Tujuan tentang pesan ini
                </label>
                <div className="dropdown ">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Projec
                  </button>
                  <ul className="dropdown-menu">
                    <li>
                      <a className="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Something else here
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="mb-2">
                <label htmlFor="nama" className="form-label">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama"
                  className="form-input form-control"
                  id="nama"
                  placeholder="Masukan nama lengkap"
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  className="form-input form-control"
                  id="email"
                  placeholder="Masukan email"
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  No Handphone
                </label>
                <input
                  type="text"
                  name="phone"
                  className="form-input form-control"
                  id="phone"
                  placeholder="Masukan no Handphone"
                  // onChange={handleChange}
                />
              </div>
              <div className="mb-2">
                <label htmlFor="email" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  type="text"
                  name="phone"
                  className="form-input form-control"
                  id="phone"
                  placeholder="Deskripsikan/ jelaskan lebih detail"
                  // onChange={handleChange}
                />
              </div>
              <div className="row container justify-content-center">
                <button type="button" className="btn btn-warning">
                  Hire
                </button>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Profile;
