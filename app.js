function openNclose() {
  var x = document.getElementById("nav");
  if (x.style.display === "flex") {
    x.style.display = "none";
    document.querySelector("#ham-img").src = "icon-menu.svg";
  } else {
    x.style.display = "flex";
    document.querySelector("#ham-img").src = "icon-menu-close.svg";
  }
}
