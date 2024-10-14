const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))
    .catch((error) => console.log(error))
};

const displayCategories = (categories) => {
    const categoryContainer = document.getElementById("categories");


    categories.forEach((item) => {
        console.log(item);

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

// {
//     "id": 1,
//     "category": "Cat",
//     "category_icon": "https://i.ibb.co.com/N7dM2K1/cat.png"
// }