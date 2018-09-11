$(document).ready(function(event) {
//console.log("I'm ready");
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var drinkInput = $("#beverage").val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var musicInput = $("#music").val();
    var countryInput = $("input#countries").val();
    var weatherInput = $("input:radio[name=weather]:checked").val();

    $("span#name").text(nameInput);
    $("span#drink").text(drinkInput);
    $("span#food").text(foodInput);
    $("span#music").text(musicInput);
    $("span#countries").text(countryInput);
    $("span#weather").text(weatherInput);

    $("#blanks").hide();

    $("#story").show();

    event.preventDefault();
  });
});
