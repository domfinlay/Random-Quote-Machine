const APIKEY = "CDZK9NKel0UxpXZLU/47nA==ocIyDZDfeRcq9Ucv";
var category = "learning";

function newQuote() {
  var randomQuote = "";
  var author = "";

  $.ajax({
    method: "GET",
    url: "https://api.api-ninjas.com/v1/quotes?category=" + category,
    headers: { "X-Api-Key": APIKEY },
    contentType: "application/json",
    success: function (result) {
      randomQuote = '"' + result[0].quote + '"';
      author = "- " + result[0].author;
      document.getElementById("text").innerText = randomQuote;
      document.getElementById("author").innerText = author;
    },
    error: function ajaxError(jqXHR) {
      console.error("Error: ", jqXHR.responseText);
    }
  });
}

let newQuoteButton = document.getElementById("new-quote");
newQuoteButton.addEventListener("click", newQuote);

window.addEventListener("DOMContentLoaded", (event) => {
  newQuote();
});