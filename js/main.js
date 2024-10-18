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

const loadCategoryPets = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id == 1 ? "cat" : ""}${id == 2 ? "dog" : ""}${id == 3 ? "rabbit" : ""}${id == 4 ? "bird" : ""}`)
    .then((res) => res.json())
    .then((data) => displayPets(data.data))
    .catch((error) => console.log(error))
}


const loadDetails = (id) => {
    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${id}`)
    .then((res) => res.json())
    .then((data) => displayDetails(data.petData))
    .catch((error) => console.log(error))
};

const displayDetails = (data) => {
    console.log(data);
    const details = document.getElementById("detailsPopup");
    details.innerHTML =
    `
    <div class="w-full sm:w-10/12 lg:w-5/12 sm:h-4/12 lg:h-12/12 p-2 sm:p-1 lg:p-5 bg-white opacity-100 flex flex-col justify-evenly mx-auto">
        <figure class="h-52 sm:h-28 lg:h-64 item-center lg:flex lg:justify-center">
    <img
      src=${data.image}
      alt="Pets"
      class="rounded-xl h-full w-full sm:w-4/12 lg:w-10/12 object-cover" />
  </figure>
        <div>
            <h2 class="font-bold text-3xl sm:text-xl">${data.pet_name}<h2>
            <ul class="sm:grid sm:grid-cols-2 text-sm">
                <li><i class="fa-solid fa-table-cells-large"></i> Breed: ${data.breed}</li>
                <li><i class="fa-regular fa-calendar"></i> Birth: ${data.date_of_birth}</li>
                <li><i class="fa-solid fa-mercury"></i> Gender: ${data.gender}</li>
                <li><i class="fa-solid fa-dollar-sign"></i> Price: ${data.price}</li>
                <li><i class="fa-solid fa-mercury"></i>Vaccinated status: ${data.vaccinated_status}</li>
            </ul>
            <h3 class="font-bold mt-4 sm:mt-0">Details Information</h3>
            <p class="text-justify py-2 sm:py-0 sm:text-sm">${data.pet_details}</p>
        </div>
        <button class="btn text-teal-600 bg-blue-100">Cancel</button>
    </div>
    `

}
loadDetails();
const demo ={
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
}




function pop(){
    document.getElementById("detailsPopup").classList.remove("hidden");
};
function close(){
    document.getElementById("detailsPopup").classList.add("hidden");
};







const displayPets = (pets) => {
    const petsContainer = document.getElementById("pets");
    petsContainer.innerHTML = "";

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
        <button id="det" onclick="pop(), loadDetails(${pet.petId})" class="btn bg-white text-teal-600">Details</button>
    </div>
  </div>
        `;
    petsContainer.append(card);

    })
}


const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");


    categories.forEach((item) => {

        const buttonContainer = document.createElement("div");
        buttonContainer.innerHTML =
        `
        <button onclick="loadCategoryPets(${item.id})" class="flex sm:gap-1 border rounded-xl p-2 sm:px-8">
        <img src="${item.category_icon}" class="w-6">
        ${item.category}
        </button>
        `


        categoryContainer.append(buttonContainer);
    });
};

loadCategories();
loadPets();


function close() {
    document.getElementById("detailsPopup")
    .addEventListener("click", function(){
    document.getElementById("detailsPopup").classList.add("hidden");
});
};
close();