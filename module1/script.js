function changeColumn1() {
  const col = document.getElementById("column1");
  const heading = document.getElementById("heading1");

  col.style.backgroundColor = "#ffe6e6"; // light red
  heading.textContent = "Funny Dog";
}

function changeColumn2() {
  const col = document.getElementById("column2");
  const heading = document.getElementById("heading2");

  col.style.backgroundColor = "#e6ffe6"; // light green
  heading.textContent = "Funny cat";
}

