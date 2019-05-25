      // make connection with gighpy api
      // pull ajax with desired animal by button push
      // it should populate the page with 10 static images
      // when user clicks on giphy image the gif should animate
      // when clicked on again gif should stop playing--this will requiere if animate = true then
      // under every gif display it rating(PG, G, so on)
      // function that takes the input from the form and recreates the array of buttons on the page including the user input
      // populate page with animal buttons with an array named topics

      
      
      
      // Example queryURL for Giphy API
      var myKey = "rsnLAx7xzaoPLyiRDj394wOOJ3D3w6ul";
      var animalTopic = "Eagle";

      var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + animalTopic + "&limit=10&api_key=" + myKey;


      // <button class="btn btn-primary" type="submit">Gif Button Name Here</button>

  
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });