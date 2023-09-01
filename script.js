var add = document.querySelector(".add");
var h5 = document.querySelector("h5");
let flag = 0;

add.addEventListener("click", function () {
  if (flag == 0) {
    h5.innerHTML = "Friends";
    h5.style.color = "Green";
    add.style.backgroundColor = "#dadada";
    add.innerHTML = "Remove Friend";
    add.style.color = "black";
    flag = 1;
  } else if (flag == 1) {
    h5.innerHTML = "Stranger";
    h5.style.color = "red";
    add.style.backgroundColor = "cadetblue";
    add.innerHTML = "Add Friend";
    flag = 0;
  }
});
