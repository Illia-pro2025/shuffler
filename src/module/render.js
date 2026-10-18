export function render(list, animes) {
  list.innerHTML = "";
  list.innerHTML = animes
    .map((anime) => {
      return `
   <div class="card" data-id="${anime.id}" ">
      <div class="card-inner" >
        <div class="card-front card-black"></div>
        <div class="card-back">
          <img class="card_img" src="${anime.image}" alt="${anime.name}">
          <h3 class="card_title">${anime.anime}</h3>
          <h3 class="card_name">${anime.name}</h3>
        </div>
      </div>
    </div>
       
       `;
    })
    .join("");
}
