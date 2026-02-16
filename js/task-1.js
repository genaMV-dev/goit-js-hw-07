const item = document.querySelectorAll(`.item`);


let titleArr = [];
let liArr = [];

item.forEach(li => {
  const title = li.querySelector('h2');
  titleArr.push(title)
});

item.forEach(li => {
    const items = li.querySelectorAll(`li`);
    liArr.push(items);
})


console.log(`Number of categories: ${item.length}`);

liArr.forEach((el, index) =>{
    console.log(`Category: ${titleArr[index].textContent}`);
    
    console.log(`Elements: ${liArr[index].length}`);
}) 












// console.log(`Category: ${titleArr[0].textContent}`);
// console.log(`Elements: ${liArr[0].length}`);
// console.log(`Category: ${titleArr[1].textContent}`);
// console.log(`Elements: ${liArr[1].length}`);
// console.log(`Category: ${titleArr[2].textContent}`);
// console.log(`Elements: ${liArr[2].length}`);