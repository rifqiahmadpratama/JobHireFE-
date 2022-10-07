// import style from "../../styles/Detail.module.css";
// import left from "../../assets/detail/previous.svg";
// import right from "../../assets/detail/next.svg";
// import Image from "next/image";

const Pagination = ({ increment, decrement }) => {
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination justify-content-center">
        <li class="page-item mx-1">
          <a
            class="page-link rounded text-secondary"
            href="#"
            aria-label="Previous"
            onClick={decrement}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item mx-1">
          <a class="page-link rounded text-secondary" href="#">
            1
          </a>
        </li>
        <li class="page-item mx-1">
          <a class="page-link rounded text-secondary" href="#">
            2
          </a>
        </li>
        <li class="page-item mx-1">
          <a class="page-link rounded text-secondary" href="#">
            3
          </a>
        </li>
        <li class="page-item mx-1">
          <a class="page-link rounded text-secondary" href="#">
            4
          </a>
        </li>
        <li class="page-item mx-1">
          <a class="page-link rounded text-secondary" href="#">
            5
          </a>
        </li>
        <li class="page-item mx-1">
          <a
            class="page-link rounded text-secondary"
            href="#"
            aria-label="Next"
            onClick={increment}
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
    // <div className={style.pagination}>
    //   <div className={style.page}>
    //     <Image src={left} className="ms-2" alt="toleft" />
    //   </div>
    //   <div className={style.page}>
    //     <p className="m-auto font-weight-bold">1</p>
    //   </div>
    //   <div className={style.page}>
    //     <p className="m-auto font-weight-bold">2</p>
    //   </div>
    //   <div className={style.page}>
    //     <p className="m-auto font-weight-bold">3</p>
    //   </div>
    //   <div className={style.page}>
    //     <p className="m-auto font-weight-bold">4</p>
    //   </div>
    //   <div className={style.page}>
    //     <p className="m-auto font-weight-bold">5</p>
    //   </div>
    //   <div className={style.page}>
    //     <Image src={right} className="ms-2" alt="toright" />
    //   </div>
    // </div>
  );
};

export default Pagination;
