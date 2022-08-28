let menuitemsobj = [
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
let cartitemsobj = [
  {
    cartitemimg: "rectangle_9",
    cartitemname: "Smashed Avo",
    cartitemprice: "20.00",
    cartitemquantity: 1
  },
  {
    cartitemimg: "rectangle_10",
    cartitemname: "Yin & Yang",
    cartitemprice: "10.00",
    cartitemquantity: 1
  },
  {
    cartitemimg: "rectangle_11",
    cartitemname: "Pancakes",
    cartitemprice: "25.00",
    cartitemquantity: 1
  },
  {
    cartitemimg: "rectangle_13",
    cartitemname: "Rancheros (Tofu)",
    cartitemprice: "25.00",
    cartitemquantity: 1
  }
]

const menuitemsdiv = document.getElementById('menulist');
const cartitemsdiv = document.getElementById('cartlist');

function loadMenu() {
  for (item of menuitemsobj) {
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
function loadCart() {
  for (item of cartitemsobj) {
    let li = document.createElement("li");

    let imgdiv = document.createElement("div");
    imgdiv.classList.add("cartimgdiv");
    let img = document.createElement("img");
    img.src = "images/" + item.cartitemimg + ".png";
    imgdiv.appendChild(img);
    li.appendChild(imgdiv);

    let namepricediv = document.createElement("div");
    namepricediv.classList.add("namepricediv");

    let itemname = document.createElement("p");
    let itemnametext = document.createTextNode(item.cartitemname);
    itemname.appendChild(itemnametext);
    namepricediv.appendChild(itemname);

    let itemprice = document.createElement("p");
    let itempricetext = document.createTextNode("$" + item.cartitemprice);
    itemprice.appendChild(itempricetext);
    namepricediv.appendChild(itemprice);

    li.appendChild(namepricediv);

    let editcartitem = document.createElement("div");
    editcartitem.classList.add("editcartitem");
    let quantitydiv = document.createElement("div");
    quantitydiv.classList.add("quantitydiv");

    let descquantitybtn = document.createElement("button");
    let descbtntext = document.createTextNode("-");
    descquantitybtn.appendChild(descbtntext);
    quantitydiv.appendChild(descquantitybtn);

    let quantityp = document.createElement("p");
    let quantitytext = document.createTextNode(item.cartitemquantity);
    quantityp.appendChild(quantitytext);
    quantitydiv.appendChild(quantityp);

    let incquantitybtn = document.createElement("button");
    let incbtntext = document.createTextNode("+");
    incquantitybtn.appendChild(incbtntext);
    quantitydiv.appendChild(incquantitybtn);

    editcartitem.appendChild(quantitydiv);

    let removeitemdiv = document.createElement("div");
    removeitemdiv.classList.add("removeitemdiv");
    let removeitembtn = document.createElement("button");
    let removeitemtext = document.createTextNode("X");
    removeitembtn.appendChild(removeitemtext);
    removeitemdiv.appendChild(removeitembtn);
    editcartitem.appendChild(removeitemdiv);

    li.appendChild(editcartitem);

    cartitemsdiv.appendChild(li);
  }
}

function goToMenu() {
  // window.location.assign('menu.html');
  window.location.href = 'menu.html';
}
function goToCart() {
  window.location.assign('/cart.html');
}
function alerting() {
  alert("works");
}