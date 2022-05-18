// IMAGENS ALEATÓRIAS DE CÃEZINHOS
const dogImg = document.querySelector('.dog-image');

const dogBtn = document.querySelector('.dog-btn');

function getRandomDog() {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then(result => result.json())
    .then(cat => dogImg.src = cat.message);
}

dogBtn.addEventListener('click', getRandomDog);

// DIGIMONS

const digiBtn = document.querySelector('.digi-btn');

const digiInput = document.querySelector('.digi-number');

const digiName = document.querySelector('.digi-name');

const digiImg = document.querySelector('.digi-img');

function getDigimon() { 
  const index = digiInput.value;
  fetch('https://digimon-api.vercel.app/api/digimon')
    .then(result => result.json())
    .then(digimon => {
      digiImg.src = digimon[index].img;
      digiName.innerText = digimon[index].name;
      
    })
}

digiBtn.addEventListener('click', getDigimon);

// RICK AND MORTY

const rickBtn = document.querySelector('.rick-btn');

const rickInput = document.querySelector('.rick-number');

const rickName = document.querySelector('.rick-name');

const rickImg = document.querySelector('.rick-img');

const rickGender = document.querySelector('.rick-gender');

const rickSpecies = document.querySelector('.rick-species');

function getRick() {
  const index = rickInput.value;
  fetch(`https://rickandmortyapi.com/api/character/${index}`)
    .then(result=>result.json())
    .then(rick => {
      rickName.innerText = rick.name;
      rickImg.src = rick.image;
      rickGender.innerText = rick.gender;
      rickSpecies.innerText = rick.species;
    });    
}


rickBtn.addEventListener('click', getRick);