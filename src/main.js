// Таймер: відображай час, витрачений на гру.
// Нова гра: додай кнопку перезапуску, яка перемішує картки та скидає всі показники.
import { render } from "./module/render";
import { checkMatch } from "./module/check";
const list = document.querySelector(".cart_list");
const animesEase = [
  {
    id: 1,
    anime: "Naruto",
    name: "Kakashi Hatake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OQIRkUtQ-aoYabazsok1TrLy2wryCvxvRQJMZnehfg&s=10",
  },
  {
    id: 2,
    anime: "Naruto",
    name: "Sakura Haruno",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7ogfDwbsQUwwcf3rZyY0Mm-D5CLWqcZbRo4n5w6-NQ&s=10",
  },
  {
    id: 3,
    anime: "One Piece",
    name: "Monkey D. Luffy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJO06k5wefZeunkSv-AGQqUhvMlj6bXKaJ9xkpEQFWg&s",
  },
  {
    id: 4,
    anime: "One Piece",
    name: "Roronoa Zoro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcfwA1Qwwaq-b6zPoRlUMe6PE-fMYiBsWFO2yI1Ezag&s=10",
  },
];
const animesMedium = [
  {
    id: 1,
    anime: "Naruto",
    name: "Kakashi Hatake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OQIRkUtQ-aoYabazsok1TrLy2wryCvxvRQJMZnehfg&s=10",
  },
  {
    id: 2,
    anime: "Naruto",
    name: "Sakura Haruno",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7ogfDwbsQUwwcf3rZyY0Mm-D5CLWqcZbRo4n5w6-NQ&s=10",
  },
  {
    id: 3,
    anime: "One Piece",
    name: "Monkey D. Luffy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJO06k5wefZeunkSv-AGQqUhvMlj6bXKaJ9xkpEQFWg&s",
  },
  {
    id: 4,
    anime: "One Piece",
    name: "Roronoa Zoro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcfwA1Qwwaq-b6zPoRlUMe6PE-fMYiBsWFO2yI1Ezag&s=10",
  },
  {
    id: 5,
    anime: "Dragon Ball",
    name: "Son Goku",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0edeRmsDyVH6fDrUGFFGzGR9DUziCtGIiOReeCuxEe3JUNkvVtisnjI&s=10",
  },
  {
    id: 6,
    anime: "Dragon Ball",
    name: "Vegeta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkiNKFqowrv5iDjmDsYU_jT8_BuuDWBv8PVe9x14fXx92LGF1bkG0E1c&s=10",
  },
  {
    id: 7,
    anime: "Attack on Titan",
    name: "Eren Yeager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFtcK1_ZxLLcUEpiArVN7gdyUII3586avJ0mXSE1rxg&s=10",
  },
  {
    id: 8,
    anime: "Attack on Titan",
    name: "Mikasa Ackerman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VJ4tN-4NflIqG-4saFZWs_9DHjP0HHMoc44g0eyqzg&s=10",
  },
  
];
const animesDifficult = [
  {
    id: 1,
    anime: "Naruto",
    name: "Kakashi Hatake",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9OQIRkUtQ-aoYabazsok1TrLy2wryCvxvRQJMZnehfg&s=10",
  },
  {
    id: 2,
    anime: "Naruto",
    name: "Sakura Haruno",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7ogfDwbsQUwwcf3rZyY0Mm-D5CLWqcZbRo4n5w6-NQ&s=10",
  },
  {
    id: 3,
    anime: "One Piece",
    name: "Monkey D. Luffy",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuJO06k5wefZeunkSv-AGQqUhvMlj6bXKaJ9xkpEQFWg&s",
  },
  {
    id: 4,
    anime: "One Piece",
    name: "Roronoa Zoro",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAcfwA1Qwwaq-b6zPoRlUMe6PE-fMYiBsWFO2yI1Ezag&s=10",
  },
  {
    id: 5,
    anime: "Dragon Ball",
    name: "Son Goku",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRy0edeRmsDyVH6fDrUGFFGzGR9DUziCtGIiOReeCuxEe3JUNkvVtisnjI&s=10",
  },
  {
    id: 6,
    anime: "Dragon Ball",
    name: "Vegeta",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDkiNKFqowrv5iDjmDsYU_jT8_BuuDWBv8PVe9x14fXx92LGF1bkG0E1c&s=10",
  },
  {
    id: 7,
    anime: "Attack on Titan",
    name: "Eren Yeager",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVFtcK1_ZxLLcUEpiArVN7gdyUII3586avJ0mXSE1rxg&s=10",
  },
  {
    id: 8,
    anime: "Attack on Titan",
    name: "Mikasa Ackerman",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0VJ4tN-4NflIqG-4saFZWs_9DHjP0HHMoc44g0eyqzg&s=10",
  },
  {
    id: 9,
    anime: "Demon Slayer",
    name: "Tanjiro Kamado",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1NeI92CAEnpNWaILEtyiOLOpFiqkqUpsQVsaTL3ma3w&s=10",
  },
  {
    id: 10,
    anime: "Demon Slayer",
    name: "Nezuko Kamado",
    image:
      "https://i.pinimg.com/474x/ec/cf/7b/eccf7b82a3fcbdecced0b537c4247828.jpg",
  },
  {
    id: 11,
    anime: "Death Note",
    name: "Light Yagami",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkG5kVVA179mNi5nFKSeKFR7_a8DbfIve7bsF5Hf-Gug&s=10",
  },
  {
    id: 12,
    anime: "Death Note",
    name: "L Lawliet",
    image:
      "https://static.wikia.nocookie.net/characterprofile/images/a/ad/L%28Death_Note%29.png/revision/latest?cb=20200502162511",
  },
];
const newEase = [...animesEase, ...animesEase];
const newMedium = [...animesMedium, ...animesMedium];
const newDifficult = [...animesDifficult, ...animesDifficult];
let firstCard = null;
let secondCard = null;
let lockBoard = false;
let moves = 0;
let time = 0;
let timerInterval = null;

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}
function startTimer() {
  timerInterval = setInterval(() => {
    time++;
    document.querySelector(".timer").textContent = `Time: ${time}s`;
  }, 1000);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 0;
  document.querySelector(".timer").textContent = `Time: 0s`;
}

list.addEventListener("click", (e) => {
  const card = e.target.closest(".card");
  if (!card || lockBoard) return;

  if (card === firstCard) return;

  const inner = card.querySelector(".card-inner");
  inner.classList.add("flip");

  if (!firstCard) {
    if (time === 0) startTimer();
    firstCard = card;
    return;
  }

  secondCard = card;
  moves++;

  const state = checkMatch(firstCard, secondCard);

  firstCard = state.firstCard;
  secondCard = state.secondCard;
  lockBoard = state.lockBoard;
  const allFlip = list.querySelectorAll(".flip");
  const item = list.querySelectorAll(".card");
  if (allFlip.length === item.length) {
    alert(`you win total moves: ${moves} time:${time}`);
    clearInterval(timerInterval);
  }
});
document.querySelector(".restart").addEventListener("click", () => {
  resetTimer();
  firstCard = null;
  secondCard = null;
  lockBoard = false;

  shuffle(newMedium);
  render(list, newMedium);

  document.querySelectorAll(".card-inner").forEach((card) => {
    card.classList.remove("flip");
  });
});

document.querySelector(".difficult").addEventListener("click", (e) => {
  const button = e.target.closest("[data-difficult]");

  if (!button) return;

  const difficult = button.dataset.difficult;

  if (difficult === "ease") {
    shuffle(newEase);
    render(list, newEase);
  } else if (difficult === "medium") {
    shuffle(newMedium);
    render(list, newMedium);
  } else if (difficult === "difficult") {
    shuffle(newDifficult);
    render(list, newDifficult);
  }
});

shuffle(newMedium);
render(list, newMedium);
