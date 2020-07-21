/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = generateExcuse();
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let subject = [
    "Mi novia",
    "Donald Trump",
    "El negrito de la esquina",
    "Un dios noruego"
  ];
  let action = ["vomito en", "cambio por drogas", "se comio", "me robo"];
  let object = [
    "mis llaves",
    "mis ganas de trabajar",
    "mi voluntad de vivir",
    "mi proyecto"
  ];
  let where = [
    "en la yapla",
    "en el palacio de Miraflores",
    "en Suiza",
    "en otro plano espiritual"
  ];

  let subjectindex = Math.floor(Math.random() * 4);
  let actionindex = Math.floor(Math.random() * 4);
  let objectindex = Math.floor(Math.random() * 4);
  let whereindex = Math.floor(Math.random() * 4);

  return (
    subject[subjectindex] +
    " " +
    action[actionindex] +
    " " +
    object[objectindex] +
    " " +
    where[whereindex]
  );
};
