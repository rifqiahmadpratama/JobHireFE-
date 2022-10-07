import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";
import Image from "next/image";

import axios from "axios";
import Button from "react-bootstrap/Button";
import ImageSearch from "../../assets/images/search.png";
import ImageProfile from "../../assets/images/profile.png";
import { useRouter } from "next/router";
import style from "../../styles/Job.module.css";
import SSRProvider from "react-bootstrap/SSRProvider";

export async function getServerSideProps() {
  const res = await axios.get("http://localhost:3004/job");
  console.log(res);
  return {
    props: { Job: res.data },
  };
}

const SearchPekerja = ({ Job }) => {
  const router = useRouter();
  return (
    <div>
      <Fragment>
        <div>
          <div className="col-12 d-flex border border-1  form-input mt-4">
            <input
              className="form-control "
              type="search"
              placeholder="Search"
              aria-label="Search"
              //    onChange={handleSearch}
            />
            <Button
              className="bg-transparent border-0 rounded-pill btn-search"
              type="submit"
            >
              <Image className="" src={ImageSearch} alt="search" />
            </Button>
            <button type="button" className="btn btn-outline-primary">
              Kategory
            </button>
            <button type="button" className="btn btn-primary">
              Search
            </button>
          </div>
          {Job?.length === 0 ? (
            <div>Loading...</div>
          ) : (
            Job?.map((item, index) => (
              <div key={index}>
                <div className="card">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-2">
                        <Image
                          src={ImageProfile}
                          layout="responsive"
                          width="1"
                          height="1"
                          alt="Profile"
                        />
                      </div>
                      <div className="col-6">
                        <h2>{item.name}</h2>
                        <p>{item.job_desk}</p>
                        <p>{item.domicili}</p>
                        <div className="col-12 d-flex">
                          {item.skill?.length < 0 ? (
                            <div>Loading</div>
                          ) : (
                            item.skill?.map((item1, index) => (
                              <div key={index}>
                                <p className={style.skill}>{item1}</p>
                              </div>
                            ))
                          )}
                        </div>
                      </div>
                      <div className="col-4 ">
                        <button
                          onClick={() =>
                            router.push({
                              pathname: "/profile",
                              query: { id: item.id },
                            })
                          }
                          type="button"
                          class="btn btn-primary"
                        >
                          Lihat Profile
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Fragment>
    </div>
  );
};

export default SearchPekerja;
