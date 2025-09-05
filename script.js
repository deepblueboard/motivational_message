const btn = document.querySelector(".btn");
const add1 = document.querySelector(".container2");
const add2 = document.querySelector(".container3");

const quotesLove = [
  {
    author: "Winston Churchill",
    citation: "Le succès n’est pas final, l’échec n’est pas fatal : c’est le courage de continuer qui compte.",
  },
  {
    author: "Eleanor Roosevelt",
    citation: "L’avenir appartient à ceux qui croient à la beauté de leurs rêves.",
  },
  {
    author: "Confucius",
    citation: "Peu importe la lenteur avec laquelle tu avances, tant que tu ne t’arrêtes pas.",
  },
  {
    author: "Theodore Roosevelt",
    citation: "Crois que tu peux le faire et tu as déjà parcouru la moitié du chemin.",
  },
  {
    author: "Thomas Edison",
    citation: "Notre plus grande faiblesse réside dans l’abandon. La façon la plus sûre de réussir est toujours d’essayer encore une fois.",
  },
  {
    author: "Maya Angelou",
    citation: "Tu ne peux pas contrôler tous les événements qui t’arrivent, mais tu peux décider de ne pas être diminué par eux.",
  },
  {
    author: "Steve Jobs",
    citation: "La seule façon de faire du bon travail est d’aimer ce que tu fais.",
  },
  {
    author: "Helen Keller",
    citation: "Seuls, nous pouvons si peu ; ensemble, nous pouvons tant.",
  },
  {
    author: "Nelson Mandela",
    citation: "Cela semble toujours impossible jusqu’à ce que ce soit fait.",
  },
  {
    author: "Albert Einstein",
    citation: "Au milieu de chaque difficulté se trouve une opportunité.",
  },
  {
    author: "Mark Twain",
    citation: "Le secret pour aller de l’avant, c’est de commencer.",
  },
  {
    author: "Ralph Waldo Emerson",
    citation: "Ce qui est derrière nous et ce qui est devant nous sont peu de choses comparé à ce qui est en nous.",
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
