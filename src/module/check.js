export function checkMatch(firstCard, secondCard) {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name;

  if (!isMatch) {
    setTimeout(() => {
      firstCard.querySelector(".card-inner").classList.remove("flip");
      secondCard.querySelector(".card-inner").classList.remove("flip");
    }, 1000);
  }

  return {
    firstCard: null,
    secondCard: null,
    lockBoard: false,
  };
  
}
