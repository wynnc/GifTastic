      // Example queryURL for Giphy API
      var myKey = "kxL82faz2wGCgqAlBP03ycTxEB7zLHhe"
      var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + myKey;


      // <button class="btn btn-primary" type="submit">Gif Button Name Here</button>

  alert("it is connected");
      $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
      });