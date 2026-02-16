const titleCategories = document.querySelectorAll(`.js-title-categories`);
const item = document.querySelectorAll(`.item`);
const listPointsAnimals = document.querySelectorAll(`.list-points-animal`);
const listPointsProducts = document.querySelectorAll(`.list-points-products`);
const listPointsTechnologies = document.querySelectorAll(`.list-points-technologies`)


let titleArr = [];
let liAnimalsArr = [];
let liProductsArr = [];
let liTechnologiesArr = [];


item.forEach((li) => {
  const title = li.querySelector('h2');
  titleArr.push(title)
});

listPointsAnimals.forEach((ul) => {
    const itemPoints = ul.querySelectorAll(`li`);
    liAnimalsArr.push(...itemPoints);
})

listPointsProducts.forEach((ul) => {
    const itemPoints = ul.querySelectorAll(`li`);
    liProductsArr.push(...itemPoints);
})

listPointsTechnologies.forEach((ul) => {
    const itemPoints = ul.querySelectorAll(`li`);
    liTechnologiesArr.push(...itemPoints);
})








console.log(`Number of categories: ${titleCategories.length}`);
console.log(`Category: ${titleArr[0].textContent}`);
console.log(`Elements: ${liAnimalsArr.length}`);
console.log(`Category: ${titleArr[1].textContent}`);
console.log(`Elements: ${liProductsArr.length}`);
console.log(`Category: ${titleArr[2].textContent}`);
console.log(`Elements: ${liTechnologiesArr.length}`);