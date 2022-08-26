let menuitems = [
  {
    menuimgurl: 'rectangle_9',
    itemname: 'Smashed Avo'
  },
  {
    menuimgurl: 'rectangle_10',
    itemname: 'Yin & Yang'
  },
  {
    menuimgurl: 'rectangle_11',
    itemname: 'Pancakes'
  },
  {
    menuimgurl: 'rectangle_12',
    itemname: 'Huevos Rancheros'
  },
  {
    menuimgurl: 'rectangle_13',
    itemname: 'Rancheros (Tofu)'
  },
  {
    menuimgurl: 'rectangle_14',
    itemname: 'Breakkie Roll'
  },
  {
    menuimgurl: 'rectangle_15',
    itemname: 'Breakkie Roll'
  },
  {
    menuimgurl: 'rectangle_16',
    itemname: 'Burrito'
  }
]

const menuitemsdiv = document.getElementById('menulist');

function loadMenu() {
  for (item of menuitems) {
    let li = document.createElement("li");
    let img = document.createElement("img");
    let p = document.createElement("p");
    img.classList.add("menuimg");
    p.classList.add("menuitemname");
    let text = document.createTextNode(item.itemname);
    p.appendChild(text);
    img.src = "images/" + item.menuimgurl + ".png";
    li.appendChild(img);
    li.appendChild(p);
    menuitemsdiv.appendChild(li);
  }
}
loadMenu();
function goToMenu() {
  window.location.assign('/menu.html');
  loadMenu();
}
function goToCart() {
  window.location.assign('/cart.html');
}
function alerting() {
  alert("works");
}