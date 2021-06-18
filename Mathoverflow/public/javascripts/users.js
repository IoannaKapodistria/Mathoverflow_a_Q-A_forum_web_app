username1 = document.querySelectorAll(".username1").forEach((item) => {
  item.addEventListener("click", (event) => {
    //console.log(item.getElementsByTagName("span")[0].innerText);
    window.location.href =
      "/users/" + item.getElementsByTagName("span")[0].innerText;
  });
});
