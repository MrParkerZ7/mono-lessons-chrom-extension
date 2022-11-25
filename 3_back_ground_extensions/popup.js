document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("btn").addEventListener("click", function () {
    alert("Welcom to darkness");
    var body = (document.getElementsByTagName("body")[0].style.backgroundColor =
      "black");
  });
});
