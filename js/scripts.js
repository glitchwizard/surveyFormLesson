$(document).ready(function(event) {
//console.log("I'm ready");
  $("#blanks form").submit(function(event) {
    var adj1input = $("input#adjective1").val();
    var adj2input = $("input#adjective2").val();
    var noun1input = $("input#noun1").val();
    var noun2input = $("input#noun2").val();
    var pluralN1input = $("input#pluralNoun1").val();
    var gameinput = $("input#Game").val();
    var pluralN2input = $("input#pluralNoun2").val();
    var ingV1input = $("input#ingEndingVerb1").val();
    var ingV2input = $("input#ingEndingVerb2").val();
    var pluralN3input = $("input#pluralNoun3").val();
    var ingV3input = $("input#ingEndingVerb3").val();
    var noun3input = $("input#noun3").val();
    var plantinput = $("input#plant1").val();
    var bodypartinput = $("input#bodypart").val();
    var placeinput = $("input#place1").val();
    var ingV4input = $("input#ingEndingVerb4").val();
    var adj3input = $("input#adjective3").val();
    var numberinput = $("input#number").val();
    var pluralN4input = $("input#pluralNoun4").val();

    $("span#adjective1").text(adj1input);
    $("span#adjective2").text(adj2input);
    $("span#noun1").text(noun1input);
    $("span#noun2").text(noun2input);
    $("span#pluralNoun1").text(pluralN1input);
    $("span#Game").text(gameinput);
    $("span#pluralNoun2").text(pluralN2input);
    $("span#ingEndingVerb1").text(ingV1input);
    $("span#ingEndingVerb2").text(ingV2input);
    $("span#pluralNoun3").text(pluralN3input);
    $("span#ingEndingVerb3").text(ingV3input);
    $("span#noun3").text(noun3input);
    $("span#plant1").text(plantinput);
    $("span#bodypart").text(bodypartinput);
    $("span#place1").text(placeinput);
    $("span#ingEndingVerb4").text(ingV4input);
    $("span#adjective3").text(adj3input);
    $("span#number").text(numberinput);
    $("span#pluralNoun4").text(pluralN4input);


    $("#blanks").hide();

    $("#story").show();

    event.preventDefault();
  });
});
