// Prompts alert-style browser message so the USER can input data
let name = prompt("Your name?");
let focus = prompt("What's your focus, Bud?");

// Output Data Into the Page
document.getElementById("name").innerHTML = name;
document.getElementById("myFocus").innerHTML = focus;
