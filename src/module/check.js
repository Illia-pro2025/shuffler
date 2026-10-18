export function checkMatch(firstCard, secondCard) {
  const isMatch = firstCard.dataset.id === secondCard.dataset.id;

  if (!isMatch) {
    setTimeout(() => {
      firstCard.querySelector(".card-inner").classList.remove("flip");
      secondCard.querySelector(".card-inner").classList.remove("flip");
    }, 1000);
  }else{
    firstCard.querySelector(".card-inner").classList.add("none");
    secondCard.querySelector(".card-inner").classList.add("none");
  }

  return {
    firstCard: null,
    secondCard: null,
    lockBoard: false,
  };
  
}
