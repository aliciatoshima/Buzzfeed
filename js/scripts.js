
// Addition Section:


// User interface (or front-end) logic:

// Business logic not included because it will remain the same.

$(document).ready(function() {
  $("form#Buzzfeed").submit(function() {

    var name = $("input#name").val();
    var flavor = $("input:radio[name=like]:checked").val();
    var flavor = $("input:radio[name=exercise]:checked").val();
    var flavor = $("input:radio[name=food]:checked").val();
    var flavor = $("input:radio[name=sleep]:checked").val();
    var flavor = $("input:radio[name=dog]:checked").val();



    if (name) {
      name
    } else {
      name = "Kaonashi"
    }

    $("#output").text(answer);
    $("#output").show();

    event.preventDefault();
  });
});
