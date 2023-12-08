import { Fragment } from "react";
import congratimg from "../../assets/congratimg.png";
import PropTypes from "prop-types";
import style from "./Game.module.css";
const Game = ({ correct, options }) => {
  return (
    <Fragment>
      <div className="container">
        <div className={style["game"]}>
          <div className={style["game__result"]}>
            <img
              className={style["congratimg"]}
              src={congratimg}
              alt="congratulate"
            />
            <h2 className={style["congrattitle"]}>
              Tabriklayman Siz {options.length} ta Savoldan {correct} tasini
              to'g'ri topdingiz!
            </h2>
            <button className={style["reloadbtn"]}>
              <a className={style["link"]} href="/">
                Takrorlash
              </a>
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Game.propTypes = {
  options: PropTypes.array,
  length: PropTypes.number,
  correct: PropTypes.number,
};

export default Game;
