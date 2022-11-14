import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Navbar from "../../components/navbar/index";
import axios from "axios";
import Link from "next/link";
import Portofolio from "../../components/portofolio/index";
import Pengalaman from "../../components/pengalamankerja/index";
import { useRouter } from "next/router";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import PhotoProfile from "../../assets/images/profile.png";
import ImageEmail from "../../assets/images/icons/email.svg";
import nookies from "nookies";
const Profile = () => {
  const router = useRouter();
  const DataCookies = nookies.get();
  const token = DataCookies.token;
  const idProfile = localStorage.getItem("id");
  const [saveData, setSaveData] = useState();
  const fetch = async () => {
    const result = await axios.get(
      process.env.REACT_APP_API_BACKEND + `users/profile/friend/${idProfile}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
          // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
        },
      }
    );

    return setSaveData(result.data.data);
  };
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>
        <Navbar />
        <div className={`container ${styles.hight}`}>
          <div className="row mt-3 justify-content-center">
            <div className="col-lg-4 col-sm-8">
              <div className={`card mb-5 ${styles.border_none}`}>
                <div className={`card-body `}>
                  <Link href="/edit-profile">
                    <div className={`${styles.img_profile}`}>
                      <Image
                        src={PhotoProfile}
                        layout="responsive"
                        width="1"
                        height="1"
                        alt="Photo Profile"
                      />
                    </div>
                  </Link>
                  <h3>{saveData?.name}</h3>
                  <h5>{saveData?.jobSkill}</h5>
                  <p>{saveData?.location}</p>
                  <p>{saveData?.job}</p>
                  <p>{saveData?.description}</p>

                  <p className="fw-1 fw-bold mt-5">Skill</p>
                  <div class="container text-center">
                    <div class="row gy-2"></div>
                  </div>

                  <ul className="d-flex flex-column mt-5">
                    <li>
                      <i class="bi bi-envelope " /> Louistommo@gmail.com
                    </li>
                    <li>
                      <i class="bi bi-instagram " /> @Louist91
                    </li>
                    <li>
                      <i class="bi bi-github " /> @Louistommo
                    </li>
                    <li>
                      <i class="bi bi-linkedin " /> @Louistommo91
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-sm-8">
              <div className={`card mb-5 ${styles.border_none}`}>
                <div className="card-body">
                  <div className="utama">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className={`nav-link active ${styles.under_line}`}
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Portofolio
                        </button>
                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Pengalaman Kerja
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mt-5" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        <Portofolio />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <Pengalaman />
                      </div>
                    </div>
                  </div>
                  {/* <div className="tab-content mt-5" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        <Portofolio />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <Pengalaman />
                      </div>
                    </div> */}
                  {/* </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Profile;
