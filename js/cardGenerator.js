export const buildCard = (character) => {
    const card = document.createElement("div");
    // card.classList.add("card");
  
    card.innerHTML = `
    <div class="row justify-content-center">
      <div class="card" style="margin-left: 1rem; margin-right: 1 rem;">
        <div class="card-body">
            <img src="${character.image}" alt="${character.name}" class="character" />
            <h6 class="card-title text-truncate" style="max-width: 150px;">${(character.name)}</h5>
            <p class="card-text">${character.species}</p>
        </div>
      </div>
    </div>
    `;
    return card;
  }