import React, { Fragment } from "react";
import PropTypes from "prop-types";
import style from "./Quiz.module.css";
const Quiz = ({ options, question, onClickVariant, step }) => {
  const percentage = Math.round((step / options.length) * 100);
  return (
    <Fragment>
      <div className={style["container"]}>
        <div className={style["quiz"]}>
          <div className={style["quiz__header"]}>
            <div
              style={{ width: `${percentage}%` }}
              className={style["quiz__header__app"]}
            ></div>
          </div>
          <div className={style["quiz__question"]}>
            <h2 className={style["quiz__question__title"]}>{question.title}</h2>
          </div>
          <div className={style["quiz__options"]}>
            {question.variants.map((variant, i) => (
              <h3
                className={style["variant"]}
                onClick={() => onClickVariant(i)}
                key={variant}
              >
                {variant}
              </h3>
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Quiz.propTypes = {
  options: PropTypes.array,
  question: PropTypes.shape({
    title: PropTypes.string,
    variants: PropTypes.arrayOf(PropTypes.string).isRequired,
    length: PropTypes.number.isRequired,
  }).isRequired,
  onClickVariant: PropTypes.func,
  step: PropTypes.number,
};

export default Quiz;
