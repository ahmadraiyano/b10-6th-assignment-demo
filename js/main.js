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
        console.log(pet);

        const card = document.createElement("div");
        card.classList = "card border";
        card.innerHTML =
        `
        <figure class="px-5 pt-5">
    <img
      src=${pet.image}
      alt="Pets"
      class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    
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
