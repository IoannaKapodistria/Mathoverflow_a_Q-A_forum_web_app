answer_btn = document.querySelector(".askbtn_answer");
var url = window.location.href;
var parts = url.split("/");
if (parts[parts.length - 1].length == 0) {
  var q_id = parts[parts.length - 2]; //pairnw to id tis erotisis apo to url, ama iparxei slash sto telos periptwsh
  console.log(q_id);
} else {
  var q_id = parts[parts.length - 1].split("?")[0]; //pairnw to id tis erotisis apo to url ama exei slash k o,tidipote allo meta
  console.log(q_id);
}

answer_btn.addEventListener("click", (event) => {
  answer_body = document.querySelector("#answer_body").value;
  post_answer("/answer", {
    body: answer_body,
    QuestionQuestionId: q_id,
  });
});

 function post_answer(url = "", data = {}) {
  // Default options are marked with *
  const response = fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", 

    body: JSON.stringify(data), 
  }).then((response) => {
    if (response.redirected) {
      console.log(response.url);
      //console.log("redirecteddd");
      window.location.href = response.url;
    }
  });
}
