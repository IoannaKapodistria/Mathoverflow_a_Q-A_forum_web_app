qtitle = document.querySelectorAll(".qtitle").forEach((item) => {
  item.addEventListener("click", (event) => {
    //console.log(item.getElementsByTagName("span")[0].innerText);
    window.location.href =
      "/questions/" + item.getElementsByTagName("span")[0].innerText;
  });
});
