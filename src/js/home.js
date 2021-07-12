import "../css/home.scss";
const home = document.createElement("div");
home.innerHTML = ["There is", "Home", "welcome to you!"].join();
home.classList.add("title");
document.body.appendChild(home);
