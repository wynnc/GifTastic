

// when user clicks on giphy image the gif should animate
// when clicked on again gif should stop playing--this will requiere if animate = true then
// under every gif display it rating(PG, G, so on)
// function that takes the input from the form and recreates the array of buttons on the page including the user input




// make connection with gighpy api
// Global variables
var myKey = "rsnLAx7xzaoPLyiRDj394wOOJ3D3w6ul";
var topics = ["eagle", "wolf", "bear", "walrus", "cheetah", "raven", "tiger", "shark"]
// Example queryURL for Giphy API


// populate page with animal buttons with an array named topics
function buttonCreate() {
  $("#gif-buttons").empty();
  topics.forEach(function (topic) {
    $("#gif-buttons").append(`<button data-topic="${topic}" type="button" class="btn btn-outline-primary">${topic}</button>`)
  })
}

buttonCreate();

function displayTopic(data){
  console.log(data.original);
  // var animalGif = data.
}

      // pull ajax with desired animal by button push on click function
$("#gif-buttons").on("click", "button", function () {
  var animalTopic = $(this).attr("data-topic");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalTopic + "&limit=10&api_key=" + myKey;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    displayTopic(response);
  });
})


      // it should populate the page with 10 static images

