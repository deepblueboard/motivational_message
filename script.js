const btn = document.querySelector(".btn");
const add1 = document.querySelector(".container2");
const add2 = document.querySelector(".container3");

const quotesLove = [
  { author: "Your future husband", citation: "A day, we will have 'bébé' " },
  {
    author: "Your fiancé",
    citation: "Can you imagine our life in french campain ? ",
  },
];

function randomIndex() {
  return Math.floor(Math.random() * quotesLove.length);
}

btn.addEventListener(
  "click",
  () => {
    // 1) activer une seule fois
    btn.classList.add("active");

    // 2) une seule sélection aléatoire pour citation+auteur
    const i = randomIndex();
    add1.textContent = quotesLove[i].citation;
    add2.textContent = quotesLove[i].author;

    // 3) afficher
    add1.style.display = "block";
    add2.style.display = "block";
  },
  { once: true }
); // <-- empêche un 2e changement
