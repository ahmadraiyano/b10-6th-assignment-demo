// Button fetched 
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
};

// pets 

const loadPets = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayPets(data.pets))
    .catch((error) => console.log(error))
};

const cardDemo = {
    "petId": 1,
    "breed": "Golden Retriever",
    "category": "Dog",
    "date_of_birth": "2023-01-15",
    "price": 1200,
    "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    "gender": "Male",
    "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    "vaccinated_status": "Fully",
    "pet_name": "Sunny"
};


const displayPets = (pets) => {
    const petsContainer = document.getElementById("pets");

    pets.forEach(pet => {

        const card = document.createElement("div");
        card.classList = "card border";
        card.innerHTML =
        `
        <figure class="p-4 h-52">
    <img
      src=${pet.image}
      alt="Pets"
      class="rounded-xl h-full w-full object-cover" />
  </figure>
  <div class="p-5">
    <h2 class="font-bold text-2xl">${pet.pet_name}</h2>
    <ul class="border-b pb-4">
        <li class="my-2"><i class="fa-solid fa-table-cells-large"></i> Breed: ${pet.breed}</li>
        <li><i class="fa-regular fa-calendar"></i> Birth: ${pet.date_of_birth}</li>
        <li class="my-2"><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender}</li>
        <li><i class="fa-solid fa-dollar-sign"></i> Price: ${pet.price}</li>
    </ul>
    <div class="flex justify-between mt-4">
        <button class="btn bg-white"><i class="fa-regular fa-thumbs-up"></i></button>
        <button class="btn bg-white text-teal-600">Adopt</button>
        <button class="btn bg-white text-teal-600">Details</button>
    </div>
  </div>
        `;
    petsContainer.append(card);

    })
}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");


    categories.forEach((item) => {

        const img = document.createElement("img");
        const button = document.createElement("button");
        const a = document.createElement("a");
        img.src = item.category_icon;
        img.classList = "w-6";
        a.innerText = item.category;
        button.classList = "flex sm:gap-1 border rounded-xl p-2 sm:px-8";

        button.append(img);
        button.append(a);

        categoryContainer.append(button);
    });
};

loadCategories();
loadPets();
