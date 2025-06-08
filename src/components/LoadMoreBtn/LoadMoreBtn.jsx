import css from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onClick }) => (
  <div className={css.wrapper}>
    <button className={css.button} onClick={onClick}>
      Load more
    </button>
  </div>
);

export default LoadMoreBtn;
