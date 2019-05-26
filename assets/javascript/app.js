

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

function displayTopic(dataTopic) {
  $("#animal-images").empty();
  var results = dataTopic.data;

  for (var i = 0; i < results.length; i++) {

    var rating = results[i].rating;
    var p = $("<p>").text("Rating: " + rating);
    var animalImage = results[i].images.fixed_height_still.url;
    var dataStill = animalImage;
    var dataAnimate = results[i].images.fixed_height.url;

    $("#animal-images").append(`<img src=${animalImage} data-state="still" class="gif" data-still=${dataStill} data-animate=${dataAnimate}>`)

  };
}
buttonCreate();


// pull ajax with desired animal by button push on click function
$("#gif-buttons").on("click", "button", function () {
  var animalTopic = $(this).attr("data-topic");

// it should populate the page with 10 static images


  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalTopic + "&limit=10&api_key=" + myKey;


  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    console.log(response);

    displayTopic(response);
  });
})


$("#animal-images").on("click", "img", function () {


  // Smake a variable named state and then store the image's data-state into it.
  // Use the .attr() method for this.

  var state = $(this).attr("data-state");
  // =============================================

  // Check if the variable state is equal to 'still',
  console.log(state);
  // then update the src attribute of this image to it's data-animate value,
  // and update the data-state attribute to 'animate'.
  if (state === "still") {
    $(this).attr("data-state", "animate");

    $(this).attr("src", $(this).attr("data-animate"));
    // console.log($(this).attr("src"));
  } else {
    // If state is equal to 'animate', then update the src attribute of this
    // image to it's data-still value and update the data-state attribute to 'still'

    $(this).attr("data-state", "still");

    $(this).attr("src", $(this).attr("data-still"));
  }

});

$("#addAnimal").on("click", function(event){
  // step off --- we've got this (overriding default submit button behavior)
  event.preventDefault();
  // .val() with empty parens GETS the value
  
  var animal = $("#animalInput").val().trim();
  animal = animal.toLowerCase();

  
  topics.push(animal);
  buttonCreate();
  // .val("") with something n the parens SETS the value
  $("#animalInput").val("");
})
