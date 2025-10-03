//#HmvAfRQM
// – взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch('https://dummyjson.com/carts')
    .then(res => res.json())
    .then(cardsObject =>{
        let  {carts} = cardsObject; // формую зміну carts (carts обєкт cardsObject)
        console.log(carts);

        let divCarts = document.createElement(`div`);
        document.body.appendChild(divCarts);


        for (const cart of carts) {
            let divInfoCart = document.createElement(`div`);
            divInfoCart.style.background = `grey`;
            divInfoCart.innerText = `discountedTotal ${cart.discountedTotal} - total ${cart.total} - id ${cart.id} - userID ${cart.userId}`;


            for (const product of cart.products) {
                let divProductCart = document.createElement(`div`);
                divProductCart.style.background = `yellow`;

                divProductCart.innerText = `id ${product.id} - title ${product.title} - price ${product.price} - total ${product.total}`;
                divCarts.append(divInfoCart, divProductCart);

            }

        }

        }
    );


// #whXxOBlYS0H
// – взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.
// Інгредієнти повинні бути списком під час відображення.


fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject =>{
        let {recipes} = recipesObject;
        console.log(recipes);

        let divRecipes = document.createElement(`div`);
        document.body.appendChild(divRecipes);

        for (const recipe of recipes) {
            let imgRecipe = document.createElement(`img`);
            imgRecipe.width = 300;
            imgRecipe.height = 300;
            imgRecipe.src = `${recipe.image}`;

            for (const ingredient of recipe.ingredients) {
                let divIngredients = document.createElement(`div`);
                let ulIngredients = document.createElement(`ul`);
                divIngredients.appendChild(ulIngredients);
                let liIngredient = document.createElement(`li`);
                liIngredient.innerText = `${ingredient}`;
                ulIngredients.appendChild(liIngredient);




                divRecipes.append(imgRecipe, divIngredients);

            }

        }

    });