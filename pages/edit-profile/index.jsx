import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Navbar from "../../components/navbar/index";
import Footer from "../../components/footer/index";
import Image from "next/image";
import axios from "axios";
import UploadImage from "../../assets/images/upload_image.png";
import { useRouter } from "next/router";
import PhotoEmpty from "../../assets/images/profile.png";
import nookies from "nookies";
import style from "../../styles/Edit.module.css";
export async function getServerSideProps(ctx) {
  const DataCookies = nookies.get(ctx);
  const id = DataCookies.id;
  const token = DataCookies.token;
  console.log("Data ID Cooksie = " + id);

  const res = await axios.get("http://localhost:3200/users/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Access-Control-Allow-Origin": "*",
      // "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE",
    },
  });
  return {
    props: { detail: res.data.data },
  };
}
const EditProfile = ({ detail }) => {
  const DataCookies = nookies.get();

  const token = DataCookies.token;
  const router = useRouter();
  const [previewEdit, setPreviewEdit] = useState();
  const [saveImage, setSaveImage] = useState();
  const [dataUser, setDataUser] = useState({
    name: "",
    job_desk: "",
    domicili: "",
    location: "",
    description: "",
  });

  const handleChange = (e) => {
    setDataUser({
      ...dataUser,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpdate = async (e) => {
    await e.preventDefault();

    axios
      .put(
        process.env.REACT_APP_API_BACKEND + "users/profile",
        JSON.stringify(dataUser),
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res);
        alert("product update");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };

  const Updatepicture = async (e) => {
    console.log("cek ID= ", token);
    await e.preventDefault();
    const formData = new FormData();
    formData.append(
      "picture",
      saveImage === undefined ? detail.picture : saveImage
    );

    axios
      .put("http://localhost:3200/users/profile/image", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        alert("photo update");
      })
      .catch((err) => {
        console.log(err);
        alert(err);
      });
  };
  function handleUpdatePicture(e) {
    console.log(e.target.files[0]);
    const uploader = e.target.files[0];
    setSaveImage(uploader);
  }

  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Edit Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>
        <Navbar />
        <div className="container">
          <div className="row mt-3 justify-content-center">
            <div className="col-4">
              <div className="card">
                <div className="card-body">
                  <form onSubmit={Updatepicture} className="w-100 form-sign-up">
                    <Image src={PhotoEmpty} layout="responsive" alt="Profile" />
                    <input
                      className="form-control mt-3"
                      type="file"
                      placeholder="photo"
                      name="photo"
                      onChange={handleUpdatePicture}
                    />
                    <button
                      type="submit"
                      className="btn btn-warning text-light"
                    >
                      Save Image
                    </button>
                  </form>
                  <h3>{detail.name}</h3>
                  <h5>{detail.job_desk}</h5>
                  <p>{detail.domicili}</p>
                  <p>Freelancer</p>
                  <p>{detail.description}</p>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <h3>Data Diri</h3>
                  <hr />

                  <form onSubmit={handleUpdate} className="w-100 form-sign-up">
                    <div className="mb-2">
                      <label htmlFor="name" className="form-label">
                        Nama Lengkap
                      </label>
                      <input
                        type="text"
                        name="name"
                        className="form-input form-control"
                        id="name"
                        placeholder="Masukan nama lengkap"
                        defaultValue={detail.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="job_desk" className="form-label">
                        Job Desk
                      </label>
                      <input
                        type="text"
                        name="job_desk"
                        className="form-input form-control"
                        id="job_desk"
                        placeholder="Masukan job desk"
                        defaultValue={detail.job_desk}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="domicili" className="form-label">
                        Domisili
                      </label>
                      <input
                        type="text"
                        name="domicili"
                        className="form-input form-control"
                        id="domicili"
                        placeholder="Masukan domosili"
                        defaultValue={detail.domicili}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="location" className="form-label">
                        Tempat Kerja
                      </label>
                      <input
                        type="text"
                        name="location"
                        className="form-input form-control"
                        id="location"
                        placeholder="Masukan Tempat Kerja"
                        defaultValue={detail.location}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="description" className="form-label">
                        Deskripsi Singkat
                      </label>
                      <textarea
                        type="text"
                        name="description"
                        className="form-input form-control"
                        id="description"
                        placeholder="Tuliskan Deskripsi Singkat"
                        defaultValue={detail.description}
                        onChange={handleChange}
                      />
                    </div>
                    <button
                      type="submit"
                      className="btn btn-warning text-light"
                    >
                      Save changes
                    </button>
                  </form>
                </div>
              </div>

              <div className="card mt-3">
                <div className="card-body">
                  <h3>Skill</h3>
                  <hr />
                  <form
                    //   onSubmit={handleCreate}
                    className="w-100 form-sign-up"
                  >
                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Skill
                      </label>
                      <input
                        type="text"
                        name="nama"
                        className="form-input form-control"
                        id="nama"
                        placeholder="Java"
                        //  onChange={handleChange}
                      />
                    </div>
                  </form>
                </div>
              </div>
              <div className="card mt-3">
                <div className="card-body">
                  <h3>Pengalaman Kerja</h3>
                  <hr />
                  <form
                    //   onSubmit={handleCreate}
                    className="w-100 form-sign-up"
                  >
                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Posisi
                      </label>
                      <input
                        type="text"
                        name="nama"
                        className="form-input form-control"
                        id="nama"
                        placeholder="Posisi"
                        // onChange={handleChange}
                      />
                    </div>

                    <div className="row g-2">
                      <div className="col-md">
                        <div className="mb-2">
                          <label htmlFor="nama" className="form-label">
                            Nama perusahaan
                          </label>
                          <input
                            type="text"
                            name="nama"
                            className="form-input form-control"
                            id="nama"
                            placeholder="Posisi"
                            //  onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="col-md">
                        <div className="mb-2">
                          <label htmlFor="nama" className="form-label">
                            Bulan/tahun
                          </label>
                          <input
                            type="text"
                            name="nama"
                            className="form-input form-control"
                            id="nama"
                            placeholder="Januari 2020"
                            //     onChange={handleChange}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="mb-2">
                      <label htmlFor="deskripsi" className="form-label">
                        Deskripsi Singkat
                      </label>
                      <textarea
                        type="text"
                        name="kerja"
                        className="form-input form-control"
                        id="kerja"
                        placeholder="Tuliskan Deskripsi Singkat"
                        //   onChange={handleChange}
                      />
                    </div>
                    <hr className="mt-3" />

                    <div className="row justify-content-center">
                      <button type="button" className="btn btn-outline-warning">
                        Tambah Pegalaman Kerja
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="card mt-3">
                <div className="card-body">
                  <h3>Portofolio</h3>
                  <hr />
                  <form
                    //   onSubmit={handleCreate}
                    className="w-100 form-sign-up"
                  >
                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Nama Aplikasi
                      </label>
                      <input
                        type="text"
                        name="nama"
                        className="form-input form-control"
                        id="nama"
                        placeholder="Masukan nama aplikasi"
                        //   onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Link repository
                      </label>
                      <input
                        type="text"
                        name="nama"
                        className="form-input form-control"
                        id="nama"
                        placeholder="Masukan link repository"
                        //   onChange={handleChange}
                      />
                    </div>

                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Type portofolio
                      </label>
                      <div className="container row">
                        <div className="form-check col-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault1"
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault1"
                          >
                            Aplikasi mobile
                          </label>
                        </div>
                        <div className="form-check col-4">
                          <input
                            className="form-check-input"
                            type="radio"
                            name="flexRadioDefault"
                            id="flexRadioDefault2"
                            checked
                          />
                          <label
                            className="form-check-label"
                            for="flexRadioDefault2"
                          >
                            Aplikasi web
                          </label>
                        </div>
                      </div>
                    </div>

                    <div className="mb-2">
                      <label htmlFor="nama" className="form-label">
                        Upload Gambar
                      </label>
                      <Image
                        src={UploadImage}
                        layout="responsive"
                        width="2"
                        height="1"
                        alt="Profile"
                      />
                    </div>
                    <hr className="mt-3" />
                    <div className="row justify-content-center">
                      <button type="button" className="btn btn-outline-warning">
                        Tambah Portofolio
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </Fragment>
    </div>
  );
};

export default EditProfile;
