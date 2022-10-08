const stock = [
    { category: "gourds", 
    type: "babyPumpkin", 
    title: "Orange Flat", 
    color: "orange", 
    varient: 1, 
    description: "Tiny decorative pumpkins with a long shelf-life, can be kept inside for months before going bad.", 
    productID: "GBPO1", 
    inStock: 3 },
    
    { category: "gourds", 
    type: "babyPumpkin", 
    title: "Tall Orange", 
    color: "orange", 
    varient: 2,
    description: "Tiny decorative pumpkins with a long shelf-life, can be kept inside for months before going bad.", 
    productID: "GBPO2",
    inStock: 4 },
    
    { category: "gourds", 
    type: "babyPumpkin", 
    title: "Striped Orange", 
    color: "orange", 
    varient: 3,
    description: "Tiny decorative pumpkins with a long shelf-life, can be kept inside for months before going bad.", 
    productID: "GBPO3",
    inStock: 5 },

];

function getStockFromCategoryTypeVarient(category, type, color, varient) {
    let stockReturned = stock
        .filter((element) => element.category === category)
        .filter((element) => element.type === type)
        .filter((element) => element.color === color)
        .filter((element) => element.varient === varient)
        .map((item) => {
            return `${item.inStock}`;
    });
    return stockReturned;
}

function getTitleFromCategoryTypeVarient(category, type, color, varient) {
    let stockReturned = stock
        .filter((element) => element.category === category)
        .filter((element) => element.type === type)
        .filter((element) => element.color === color)
        .filter((element) => element.varient === varient)
        .map((item) => {
            return `${item.title}`;
    });
    return stockReturned;
}

function getTitlesFromCategoryTypeColor(category, type, color) {
    let stockReturned = stock
        .filter((element) => element.category === category)
        .filter((element) => element.type === type)
        .filter((element) => element.color === color)
        .map((item) => {
            return item;
    });
    return stockReturned;
}

// let graduatingStudents = students
//     .filter((element) => element.category === )
//     .map((item) => {
//       return `${item.title} ${item.inStock}`;
// });
  
// console.log(graduatingStudents); // ["John Doe", "Abigail Susu"]
