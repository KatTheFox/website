(function () {
  let theme = localStorage.getItem("theme") || "fl";
  switch (theme) {
    case "fd":
      darkMode();
      break;
    case "sd":
      darkMode();
      simpleMode();
      break;
    case "sl":
      simpleMode();
      break;
    case "fl":
      break;
  }
  updateTheme();
})();
function darkMode() {
  for (const element of document.getElementsByClassName("modeset")) {
    element.classList.toggle("darkmode");
  }
  updateTheme();
}
function simpleMode() {
  for (const element of document.getElementsByClassName("modeset")) {
    element.classList.toggle("simplemode");
  }
  updateTheme();
}
function updateTheme() {
  for (const element of document.getElementsByClassName("modeset")) {
    if (element.classList.contains("simplemode")) {
      if (element.classList.contains("darkmode")) {
        element.classList.remove("simplelight", "fancydark", "fancylight");
        element.classList.add("simpledark");
        localStorage.setItem("theme", "sd");
      } else {
        element.classList.remove("simpledark", "fancydark", "fancylight");
        element.classList.add("simplelight");
        localStorage.setItem("theme", "sl");
      }
    } else {
      if (element.classList.contains("darkmode")) {
        element.classList.remove("simplelight", "simpledark", "fancylight");
        element.classList.add("fancydark");
        localStorage.setItem("theme", "fd");
      } else {
        element.classList.remove("simplelight", "simpledark", "fancydark");
        element.classList.add("fancylight");
        localStorage.removeItem("theme");
      }
    }
  }
}
