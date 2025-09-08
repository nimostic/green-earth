const cart = []

// Mobile menu toggle
const btn = document.getElementById("nav-toggle");
const menu = document.getElementById("mobile-menu");

btn.addEventListener("click", () => {
  const isOpen = menu.style.maxHeight && menu.style.maxHeight !== "0px";
  menu.style.maxHeight = isOpen ? "0px" : menu.scrollHeight + "px";
});

// remove active btn categories container
const removeActive = () => {
  const buttons = document.querySelectorAll(".plants-btn");
  // console.log(btn);
  buttons.forEach((btn) => btn.classList.remove("active"));
};

// cat-container

const loadCategories = async () => {
  const url = "https://openapi.programming-hero.com/api/categories";
  const res = await fetch(url);
  const details = await res.json();
  displayCategories(details.categories);
};
// {
//     "id": 1,
//     "category_name": "Fruit Tree",
//     "small_description": "Trees that bear edible fruits like mango, guava, and jackfruit."
// }
const displayCategories = (data) => {
  //   console.log(data);
  const catContainer = document.getElementById("cat-container");
  catContainer.innerHTML = "";
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
    <button id="plants-btn-${element.id}" onclick = "loadPlantsByCategories(${element.id})" class="hover:bg-[#15803D] text-gray hover:text-white w-full text-left px-4 py-2 rounded mb-2 plants-btn">
        ${element.category_name}
    </button>
    `;
    catContainer.appendChild(div);
  });
};
loadCategories();

// card-container

const loadPlants = async () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  const res = await fetch(url);
  const details = await res.json();
  displayPlants(details.plants);
};

const displayPlants = (data) => {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  data.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
       <div class="card p-4 bg-white rounded-lg space-y-2 shadow-md">
          <img class="object-cover rounded-md h-52 w-full" src="${element.image}" alt="" />
          <h1 onclick="loadPlantsDetails(${element.id})" class="font-bold">${element.name}</h1>
          <p class="text-gray-400">
            ${element.description}
          </p>
          <div class="flex justify-between">
            <h1 class="bg-[#DCFCE7] text-[#15803D] py-1 px-3 rounded-3xl">
              ${element.category}
            </h1>
            <h1 class="font-bold">$${element.price}</h1>
          </div>
          <button class="btn bg-[#15803D] text-white rounded-3xl">
            Add to Cart
          </button>
        </div>
    `;
    cardContainer.appendChild(div);
  });
};

loadPlants();

document.getElementById("all-trees").addEventListener("click", () => {
  removeActive();
  const btn = document.getElementById(`all-trees`);
  btn.classList.add("active");
  loadPlants();
});

// display plants by categories

const loadPlantsByCategories = async (id) => {
  const url = `https://openapi.programming-hero.com/api/category/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  removeActive();
  const btn = document.getElementById(`plants-btn-${id}`);
  btn.classList.add("active");
  displayPlants(details.plants);
};

// load plants details

// {
//     "id": 2,
//     "image": "https://i.ibb.co.com/WNbbx3rn/guava-min.jpg",
//     "name": "Guava Tree",
//     "description": "A hardy fruit tree that grows in various climates, yielding guavas packed with Vitamin C. Its low maintenance nature makes it a favorite for home gardens.",
//     "category": "Fruit Tree",
//     "price": 350
// }
const loadPlantsDetails = async (id) => {
  const url = `https://openapi.programming-hero.com/api/plant/${id}`;
  const res = await fetch(url);
  const details = await res.json();
  displayPlantsDetails(details.plants);
};
const displayPlantsDetails = (data) => {
  const modalContainer = document.getElementById("modal_container");
  modalContainer.innerHTML = `
          <h1 class="font-2xl font-bold">${data.name}</h1>
          <img class= "w-full object-cover h-48 md:h-60 rounded-md" src="${data.image}" alt="">
          <h3>
          <span class="font-bold">Category : </span>${data.category}</h3>
          <h3>
          <span class="font-bold">Price : </span>${data.price}</h3>
          <h3><span class="font-bold">Description : </span>${data.description}</h3>
    `;
  document.getElementById("word_model").showModal();
};


// add to cart 
