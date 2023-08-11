/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = () => {
  document.querySelector("#bton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = makeExcuse();
  });
};

let makeExcuse = () => {
  function generateRandomIndex(index) {
    let randomNumber = Math.floor(Math.random() * index);
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

  let randomExcuse = who[generateRandomIndex(who.length)].concat(
    " ",
    action[generateRandomIndex(action.length)],
    " ",
    what[generateRandomIndex(what.length)],
    " ",
    when[generateRandomIndex(when.length)]
  );

  /*TODO: añado un comentario para hacer el pull request*/

  return randomExcuse;
};
