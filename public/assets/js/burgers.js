$(function() {
  $(".devour").on("click", function(event) {
    var id = $(this).data("id");

    var devoured = {
      eaten: 1
    };

    // This updates the value in the 'eaten' column for the devour button we clicked on. It identifies which burger
    // has been devoured by its corresponding id.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: devoured
    }).then(
      function() {
        console.log("changed eaten to true.");
        // And we reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // preventDefault to ensure the page doesn't refresh on click
    event.preventDefault();

    var newBurger = {
      burger_name: $("#bu").val().trim(),
      eaten: 0
    };

    //the new burger must contain the text 'burger' before it's added. Added a character limit as well to maintain aesthetics.
    if (newBurger.burger_name.toLowerCase().indexOf("burger") == -1 || newBurger.burger_name.length >= 30){
      $("#bu").val("")
      return false;
    }

    // Send the POST request, creating a new burger entry with an automatically incrementing ID, burger_name, and eaten
    // set to false.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
