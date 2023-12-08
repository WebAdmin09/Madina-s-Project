import React, { Fragment, useState } from "react";
import tree from "../assets/tree.png";
import apple from "../assets/apple.png";
import basket from "../assets/basket.png";
import style from "./HomePage.module.css";
import Quiz from "../components/Quiz/Quiz";
import Game from "../components/Game/Game";

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

  const [step, setStep] = useState(0);
  const question = options[step];
  const [correct, setCorrect] = useState(0);

  const onClickVariant = (index) => {
    setStep(step + 1);

    if (index === question.correct) {
      setCorrect(correct + 1);
      
    }
  };
  return (
    <Fragment>
      <div className={style["main__wrapper"]}>
        <img className={style["treeImg"]} src={tree} alt="tree" />
        <img className={style["basketImg"]} src={basket} alt="basket" />
        <div className={style["apples"]}>
          <img className={style["apple1"]} src={apple} alt="apple" />
          <img className={style["apple2"]} src={apple} alt="apple" />
          <img className={style["apple3"]} src={apple} alt="apple" />
          <img className={style["apple4"]} src={apple} alt="apple" />
          <img className={style["apple5"]} src={apple} alt="apple" />
          <img className={style["apple6"]} src={apple} alt="apple" />
          <img className={style["apple7"]} src={apple} alt="apple" />
          <img className={style["apple8"]} src={apple} alt="apple" />
          <img className={style["apple9"]} src={apple} alt="apple" />
          <img className={style["apple10"]} src={apple} alt="apple" />
        </div>
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
