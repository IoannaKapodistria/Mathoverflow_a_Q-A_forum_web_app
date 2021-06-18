var answer;
logButton = document.querySelector(".logButton");

fetch("/islogged") // kathe fora pou ananewnetai h selida ginetai to fetch
  .then((response) => response.json())
  .then((data) => {
    answer = data;
    console.log(answer);
    if (answer.islogged == "true") {
      logButton.textContent = "Log Out";
    } else {
      logButton.textContent = "Log In";
    }
  });

//console.log(logButton);

prof_button = document.querySelector(".prof_button");

prof_button.onclick = function () {
  window.location.href = "/users/" + answer.userId;
  console.log("/users" + answer.userId);
};

prof_footer = document.querySelector(".prof_footer");

prof_footer.onclick = function () {
  window.location.href = "/users/" + answer.userId;
  console.log("/users" + answer.userId);
};
