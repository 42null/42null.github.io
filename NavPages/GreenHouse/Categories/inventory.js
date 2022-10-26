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

// Cart Cookie Dissasembly
const cookieCartName = "cart";
const cookieCartContentsDefault = "";

// https://stackoverflow.com/a/12696051
Array.prototype.findReg = function(match) {
    var reg = new RegExp(match);

    return this.filter(function(item){
        return typeof item == 'string' && item.match(reg);
    });
}



function updateCartCookieContents(cookieStockID, numberOfStock){

    var json_str2 = getCookie(cookieCartName);
    var arr2 = "";

    try{       
        arr2 = JSON.parse(json_str2);
    }catch(err){
        arr2 = JSON.parse("[]");
        // console.log(err);
    }
    console.log(">"+arr2);

    // let locationInArray = arr2.indexOf(cookieStockID);

    let notFound = true;
    for(let i = 0; i < arr2.length; i++){
        console.log("+++"+arr2[i].substring(0, arr2[i].indexOf(":")));
        if(arr2[i].substring(0, arr2[i].indexOf(":")) == cookieStockID){
            notFound = false;
            
            if(numberOfStock == 0){
                arr2.splice(i, 1);
            }else{
                // arr2.splice(locationInArray, 1);
                // arr2.push(cookieStockID+":"+numberOfStock);
        
            }
        }
        

    }
    if(notFound){
        console.log("ADDING TO CART");
        arr2.push(cookieStockID+":"+numberOfStock);
    }
    // let locationInArray = arr2.findReg("//"+cookieStockID+":\w+");
    
    document.cookie = cookieCartName+"="+JSON.stringify(arr2);;
}





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

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let ca = document.cookie.split(';');
  for(let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let user = getCookie("username");
  if (user != "") {
    alert("Welcome again " + user);
  } else {
    user = prompt("Please enter your name:", "");
    if (user != "" && user != null) {
      setCookie("username", user, 365);
    }
  }
} 