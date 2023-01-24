// Open external links
let links = document.querySelectorAll("a");

for (let i = 0; i < links.length; i++) {
  links[i].onclick = function (event) {
    if (
      !(
        this.href.startsWith("https://joseneves.org") ||
        this.href.startsWith("https://www.joseneves.org") ||
        this.href.startsWith("https://joseneves.webflow.io")
      )
    ) {
      event.preventDefault();
      window.open(this.href, "_blank");
    }
  };
}
// Library search logic

let input = document.getElementById("search-query");
let resetButton = document.getElementById("reset");
input.type = "search";
//resetButton.classList.add("hidden");

input.addEventListener("focus", function () {
  if (this.value === "") {
    this.placeholder = "";
    resetButton.classList.add("hidden");
  } else {
    resetButton.classList.remove("hidden");
    resetButton.classList.add("visible");
  }
});

input.addEventListener("blur", function () {
  if (this.value === "") {
    this.placeholder = "Como escolher o que_";
    resetButton.classList.add("hidden");
  }
});

resetButton.addEventListener("click", function (e) {
  e.preventDefault();
  input.value = "";
  input.placeholder = "Como escolher o que_";
  resetButton.classList.add("hidden");
});
