const $overlay = document.getElementById("overlay");
const $modal = document.getElementById("modal");
const $btn_search = document.getElementById("btn_search");
const $formSearch = document.getElementById("formSearch");
const $logo = document.getElementById("logo");
function modal() {
  $overlay.classList.add("active");
  // $modal.classList.add('active')
  $modal.style.animation = "fadeInBottom 1s forwards";
}

$overlay.addEventListener("click", () => {
  $modal.style.animation = "fadeOutBottom 1s forwards";
  $overlay.style.transitionDelay = "1s";
  $overlay.classList.remove("active");
});

$btn_search.addEventListener("click", () => {
  $formSearch.classList.toggle("active");
  $logo.classList.toggle("Inactive");
});

async function load() {
  const $listCharacters = document.getElementById("listCharacters");
  const $modalImage = document.getElementById("modalImage");
  const $modalTitle = document.getElementById("modalTitle");
  const $modalDescription = document.getElementById("modalDescription");

  async function getDataCharacters(url) {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  }

  function renderCharactersList(list, $container) {
    list.forEach(Character => {
      const HTMLString = CharactersTemplate(Character);
      const CharacterElement = createTemplate(HTMLString);

      $container.append(CharacterElement);

      addEventClick(CharacterElement);
    });
  }

  function addEventClick($element) {
    $element.addEventListener("click", event => {
      showModal($element);
    });
  }

  function showModal($element) {
    $overlay.classList.add("active");
    $modal.style.animation = "fadeInBottom 1s forwards";

    const id = $element.dataset.id;
    const data = findCharter(Characters, id);

    const imageUnificada = `${data.thumbnail.path}.${data.thumbnail.extension}`;

    $modalImage.setAttribute("src", imageUnificada);
    $modalTitle.textContent = data.name;
    $modalDescription.textContent = data.description;
  }

  function findCharter(list, id) {
    return list.find(Characters => Characters.id === parseInt(id, 10));
  }

  function CharactersTemplate(Character) {
    const description = cutText(Character.description);
    return `
        <section class="list-character-container" data-id="${Character.id}">
                    <figure class="list-character-image">
                        <img src="${Character.thumbnail.path}.${
      Character.thumbnail.extension
    }" alt="">
                    </figure>
                    <div class="list-character-texts">
                        <header class="header-card">
                            <h1 class="titles">${Character.name}</h1>
                            
                        </header>
                        <div class="body-text">
                            <p class="character-description">${description}...</p>
                        </div>
                        <footer class="list-character-btnArrow">
                            <p >More info</p>
                            <img class="icon" src="src/images/arrow.png" alt="" onclick="modal()">
                        </footer>
                    </div>
        </section>
        `;
  }
  function cutText(text) {
    return text.substring(0, 130);
  }
  function createTemplate(HTMLStrig) {
    const html = document.implementation.createHTMLDocument();
    html.body.innerHTML = HTMLStrig;

    return html.body.children[0];
  }

  const URL_API =
    "https://gateway.marvel.com:443/v1/public/characters?&limit=10&apikey=5e0b7a3b8c23938b449a5da5f3584ca9";

  const {
    data: { results: Characters }
  } = await getDataCharacters(URL_API);
  renderCharactersList(Characters, $listCharacters);
}

load();
