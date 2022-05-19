let coffeeArray = ["Espresso", "Long Black", "Americano", "Flat White", "Latte", "Mocha"]
let teaArray = ["Aloe Vera Rooibos", "British Breakfast", "Classic Earl Grey", "Lemon Ginger Mint"]
let foodArray = [
    {"name": "Salmon & Kale",
     "ingredients": "pan seared salmon, kale, fennel, cherry tomato, hazelnut, onsen egg, togorashi, beetroot dressing",
     "price": "$9.99"
    },
    {"name": "Avocado Smash",
     "ingredients": "multigrain toast, guacamole, cherry tomato, lemon, hazelnut, soft boil egg, yuzu vinaigrette",
     "price": "$8.99"
    },
    {"name": "Eggs Benedict",
     "ingredients": "mushroom, wilted spinach, soft boil egg, hummus, cauliflower, grana padano, cherry tomato, multigrain",
     "price": "$10.99"
    },
    {"name": "Smoothie Bowl",
     "ingredients": "blended acai mix, granola, 2 fruits, coconut flakes, goji berries, chia seeds & pumpkin seeds",
     "price": "$9.99"
    },
    {"name": "Crab Nicoise",
     "ingredients": "crabmeat, mix mesclun, cherry tomato, kenya bean, potato, poached egg, anchovies dressing",
     "price": "$11.99"
    }

]

function createMenu(coffeeArr, teaArr, foodArr){
    let menu = document.createElement("div");
    menu.id = "menu";
    let drinksBox = document.createElement("div");
    drinksBox.id = "drinksBox";
    let coffeeHeading = document.createElement("div");
    coffeeHeading.id = "coffeeHeading";
    coffeeHeading.innerHTML = "Coffee"
    drinksBox.appendChild(coffeeHeading);
    coffeeArr.forEach(addCoffee);

        function addCoffee(coffeeDrink) {
            let coffee = document.createElement("div")
            coffee.className = "drink";
            coffee.innerHTML = coffeeDrink;
            drinksBox.appendChild(coffee);
        }

    let teaHeading = document.createElement("div");
    teaHeading.id = "teaHeading";
    teaHeading.innerHTML = "Tea"
    drinksBox.appendChild(teaHeading)
    teaArr.forEach(addTea);

        function addTea(teaDrink){
            let tea= document.createElement("div")
            tea.className = "drink";
            tea.innerHTML = teaDrink;
            drinksBox.appendChild(tea);
        }
    
    let drinkPrices = document.createElement("div");
    drinkPrices.id = "drinkPrices";
    drinkPrices.innerHTML = "S: $1.99 M: $2.99 L: $3.99"
    drinksBox.appendChild(drinkPrices);

    let foodBox = document.createElement("div");
    foodBox.id = "foodBox";
    let foodHeading = document.createElement("div");
    foodHeading.id = "foodHeading";
    foodHeading.innerHTML = "Food";
    foodBox.appendChild(foodHeading);
    foodArr.forEach(addFood);

        function addFood (foodItem){
            let food = document.createElement("div");
            food.className = "food";
            food.innerHTML = foodItem.name;

            let ingredients = document.createElement("ingredients")
            ingredients.className = "ingredients";
            ingredients.innerHTML = foodItem.ingredients;
        

            let foodPrice = document.createElement("foodPrice");
            foodPrice.className = "foodPrice";
            foodPrice.innerHTML = foodItem.price;
            foodBox.appendChild(food);
            foodBox.appendChild(ingredients);
            foodBox.appendChild(foodPrice);
            
        }

    menu.appendChild(drinksBox);
    menu.appendChild(foodBox);
    contentBox.appendChild(menu);
}

export {
    coffeeArray,
    teaArray,
    foodArray,
    createMenu
}