import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import style from "../../styles/Home.module.css";

const HomeStart = () => {
  return (
    <div className="container mt-5">
      <div class={style.card_home_border}>
        <div class="card-body">
          <div className="row container justify-content-between">
            <div className="col-4">
              <h1>Lorem ipsum dolor sit amet</h1>
            </div>
            <div className="col-4 mt-4">
              <button type="button" class="btn btn-light">
                Mulai dari sekarang
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeStart;
