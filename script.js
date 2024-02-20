let switchMode = document.getElementById("switchModeBlack");

switchMode.onclick = function () {
  let theme = document.getElementById("theme");

  if(theme.getAttribute("href") == "styleBlue.css") {
    theme.href = "styleBlack.css"
  } else {
      theme.href = "styleBlue.css"
    }
}
