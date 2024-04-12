document.addEventListener("DOMContentLoaded", function() {
  const table = document.getElementById("table");
  const image = document.getElementById("image");

  table.addEventListener("mouseenter", function() {
    image.style.display = "block";
  });

  table.addEventListener("mouseleave", function() {
    image.style.display = "none";
  });
});