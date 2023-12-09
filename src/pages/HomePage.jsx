import React, { Fragment, useState } from "react";
import tree from "../assets/tree.png";
import basket from "../assets/basket.png";
import style from "./HomePage.module.css";
import Quiz from "../components/Quiz/Quiz";
import Game from "../components/Game/Game";

import apple1 from "../assets/apple1.png";
import apple2 from "../assets/apple2.png";
import apple3 from "../assets/apple2.png";
import apple4 from "../assets/apple2.png";
import apple5 from "../assets/apple2.png";
import apple6 from "../assets/apple2.png";
import apple7 from "../assets/apple2.png";
import apple8 from "../assets/apple2.png";
import apple9 from "../assets/apple2.png";
import apple10 from "../assets/apple10.png";

const HomePage = () => {
  const options = [
    {
      title: "1) Miraziz Aʼzam qachon tugʻilgan?",
      variants: [
        "A) 1936-yil  29-mart",
        "B) 1934-yil 30-mart",
        "C) 1935-yil 29-mart",
      ],
      correct: 0,
    },
    {
      title: `2) "Qirq bolaga qirq savol" she'rining muallifi kim?`,
      variants: ["A)  Poʻlat Moʻmin", "B)  T.Adashboyev", "C)  Miraziz Aʼzam"],
      correct: 2,
    },
    {
      title: `3) Miraziz Aʼzamning "Ayiqning maqtanishni va aldanish" sheʼrida ayiqni kimlar aldab qochib ketadi?`,
      variants: ["A) Tipratikan", "B) Quyonlar", "C) Olmaxon"],
      correct: 1,
    },
    {
      title: `4) Metallurg","Aqlli bolalar" sheʼriy toʻplamlari muallifi kim?`,
      variants: ["A) Qudrat Hikmat", "B) Poʻlat Moʻmin", "C) Miraziz Aʼzam"],
      correct: 2,
    },
    {
      title:
        "5) Yaxshilikning yorugʻligi nimada? Yaxshi boʻlish insonga bir imkonmi? Nur ulashish qiyinmi yo osonmi? Ushbu  parcha  qaysi sherdan olingan?",
      variants: [
        "A) Qirq bolaga qirq savol",
        "B) Yoʻlini topdi",
        "C) Azizning orzulari",
      ],
      correct: 0,
    },
    {
      title: "6) Miraziz Aʼzamning birinchi sheʼri qaysi nomda chop etilgan?",
      variants: ["A) Gʻalati tush", "B) Metallurg", "C) Yer aylanadi"],
      correct: 0,
    },
    {
      title: "7) Miraziz Aʼzamning kattalar uchun yozgan asarlarini toping?",
      variants: [
        "A) Senga nima boʻldi?",
        "B) Sabot",
        "C) Eng yorugʻ yulduzlar",
      ],
      correct: 1,
    },
    {
      title:
        "8) Turk,nemis,rus adiblarining asarlarini tarjima qilgan shoir kim?",
      variants: ["A) Poʻlat moʻmin", "B) Hakim Nazir", "C) Miraziz Aʼzam"],
      correct: 2,
    },
    {
      title: `9) "Ona tilim sheʼrining muallifi kim?`,
      variants: ["A) Miraziz Aʼzam", "B) Xurshid Davron", "C) A .Avloniy"],
      correct: 0,
    },
    {
      title:
        "10) Onasi bogʻcha tarbiyachisi, otasi tarix oʻqituvchisi boʻlgan shoir kim?",
      variants: ["A) A. Avloniy", "B) H.H. Niyoziy", "C) Miraziz Aʼzam"],
      correct: 2,
    },
  ];
  const appleImages = [
    apple1,
    apple2,
    apple3,
    apple4,
    apple5,
    apple6,
    apple7,
    apple8,
    apple9,
    apple10,
  ];
  const [step, setStep] = useState(0);
  const question = options[step];
  const [correct, setCorrect] = useState(0);
  const [correctAnswerGiven1, setCorrectAnswerGiven1] = useState(false);
  const [correctAnswerGiven2, setCorrectAnswerGiven2] = useState(false);
  const [correctAnswerGiven3, setCorrectAnswerGiven3] = useState(false);
  const [correctAnswerGiven4, setCorrectAnswerGiven4] = useState(false);
  const [correctAnswerGiven5, setCorrectAnswerGiven5] = useState(false);
  const [correctAnswerGiven6, setCorrectAnswerGiven6] = useState(false);
  const [correctAnswerGiven7, setCorrectAnswerGiven7] = useState(false);
  const [correctAnswerGiven8, setCorrectAnswerGiven8] = useState(false);
  const [correctAnswerGiven9, setCorrectAnswerGiven9] = useState(false);
  const [correctAnswerGiven10, setCorrectAnswerGiven10] = useState(false);

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
      if (step === 0) {
        setCorrectAnswerGiven1(true);
      }
      if (step === 1) {
        setCorrectAnswerGiven2(true);
      }
      if (step === 2) {
        setCorrectAnswerGiven3(true);
      }
      if (step === 3) {
        setCorrectAnswerGiven4(true);
      }
      if (step === 4) {
        setCorrectAnswerGiven5(true);
      }
      if (step === 5) {
        setCorrectAnswerGiven6(true);
      }
      if (step === 6) {
        setCorrectAnswerGiven7(true);
      }
      if (step === 7) {
        setCorrectAnswerGiven8(true);
      }
      if (step === 8) {
        setCorrectAnswerGiven9(true);
      }
      if (step === 9) {
        setCorrectAnswerGiven10(true);
      }
    }
  };

  const appleElements = appleImages.map((appleImg, index) => (
    <img
      key={index}
      className={`${style[`apple${index + 1}`]}
       ${index === 0 && correctAnswerGiven1 ? style.changed1 : ""}
      ${index === 1 && correctAnswerGiven2 ? style.changed2 : ""}
      ${index === 2 && correctAnswerGiven3 ? style.changed3 : ""}
      ${index === 3 && correctAnswerGiven4 ? style.changed4 : ""}
      ${index === 4 && correctAnswerGiven5 ? style.changed5 : ""}
      ${index === 5 && correctAnswerGiven6 ? style.changed6 : ""}
      ${index === 6 && correctAnswerGiven7 ? style.changed7 : ""}
      ${index === 7 && correctAnswerGiven8 ? style.changed8 : ""}
      ${index === 8 && correctAnswerGiven9 ? style.changed9 : ""}
      ${index === 9 && correctAnswerGiven10 ? style.changed10 : ""}
      `}
      src={appleImg}
      alt="apple"
    />
  ));

  return (
    <Fragment>
      <div className={style["main__wrapper"]}>
        <img className={style["treeImg"]} src={tree} alt="tree" />
        <div className={style["basket__wrap"]}>
          <img className={style["basketImg"]} src={basket} alt="basket" />
          <span className={style["correct__num"]}>{correct}</span>
        </div>
        <div className={style["apples"]}>{appleElements}</div>
      </div>
      {step !== options.length ? (
        <Quiz
          options={options}
          question={question}
          onClickVariant={onClickVariant}
          step={step}
        />
      ) : (
        <Game correct={correct} options={options} />
      )}
    </Fragment>
  );
};

export default HomePage;
