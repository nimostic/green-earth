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
    const btn = document.createElement("button");
    btn.className ="hover:bg-[#15803D] text-gray hover:text-white w-full text-left px-4 py-2 rounded mb-2";
    btn.textContent = element.category_name;
    catContainer.appendChild(btn);


  });
};
loadCategories();



// card-container 

const loadPlants = async () => {
  const url = "https://openapi.programming-hero.com/api/plants";
  const res = await fetch(url);
  const details = await res.json();
  console.log(details.plants, "ami plants");
};

// const displayPlants = (data) =>
// {
//     console.log(data);
// }
// displayPlants()