document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    alert("Welcom to Green");
    document.getElementsByTagName("body")[0].style.backgroundColor = "green";
  });
});
