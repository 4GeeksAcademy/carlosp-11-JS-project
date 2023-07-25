/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#bton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = makeExcuse();
  });
};

let makeExcuse = () => {
  function obtRandNum(num) {
    let randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
  }

  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  let randomExcuse = who[obtRandNum(who.length)].concat(
    " ",
    action[obtRandNum(action.length)],
    " ",
    what[obtRandNum(what.length)],
    " ",
    when[obtRandNum(when.length)]
  );

  return randomExcuse;
};
