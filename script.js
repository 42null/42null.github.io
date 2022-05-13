var theme, prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
if (prefersDarkScheme.matches)
    theme = document.body.classList.contains("light-mode") ? "light" : "dark";
else
    theme = document.body.classList.contains("dark-mode") ? "dark" : "light";
// localStorage.setItem("theme", "theme = "+theme);
localStorage.setItem("theme", "theme = "+theme);

function toggle() {
    // var currentTheme = localStorage.getItem("theme");
    console.log(currentTheme);
    prompt("TEST","t");
    if (currentTheme == "dark"){
        document.body.classList.toggle("light-mode");   
    }else if (currentTheme == "light"){
        document.body.classList.toggle("dark-mode");
    }
    
    console.log("+++"+localStorage.getItem("theme")+"");
}

// var darkMode = false;
// var darkModeButton = document.createElement('button');
// darkModeButton.innerHTML = 'Dark Mode';
// darkModeButton.onclick = function() {
//   if (darkMode) {
//     document.body.style.backgroundColor = 'white';
//     document.body.style.color = 'black';
//     darkModeButton.innerHTML = 'Dark Mode';
//   } else {
//     document.body.style.backgroundColor = 'black';
//     document.body.style.color = 'white';
//     darkModeButton.innerHTML = 'Light Mode';
//   }
//   darkMode = !darkMode;
// };
// document.body.appendChild(darkModeButton);


// function sortList(idOfSwitch) {
//   var list, i, switching, b, shouldSwitch;
//   list = document.getElementById(idOfSwitch);
//   switching = true;
//   /* Make a loop that will continue until
//   no switching has been done: */
//   while (switching) {
//     // start by saying: no switching is done:
//     switching = false;
//     b = list.getElementsByTagName("LI");
//     // Loop through all list-items:
//     for (i = 0; i < (b.length - 1); i++) {
//       // start by saying there should be no switching:
//       shouldSwitch = false;
//       /* check if the next item should
//       switch place with the current item: */
//       if (b[i].innerHTML.toLowerCase() > b[i + 1].innerHTML.toLowerCase()) {
//         /* if next item is alphabetically
//         lower than current item, mark as a switch
//         and break the loop: */
//         shouldSwitch = true;
//         break;
//       }
//     }
//     if (shouldSwitch) {
//       /* If a switch has been marked, make the switch
//       and mark the switch as done: */
//       b[i].parentNode.insertBefore(b[i + 1], b[i]);
//       switching = true;
//     }
//   }
// }