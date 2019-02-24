

$(document).ready(function() {
  $("form#Buzzfeed").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();

    var like = $("input:radio[name=like]:checked").val();
    var exercise = $("input:radio[name=exercise]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var sleep = $("input:radio[name=sleep]:checked").val();
    var dog = $("input:radio[name=dog]:checked").val();

    if (name) {
      name;
    } else {
      name = "Kaonashi";
    }

    $("#name1").text(name);
    // $("#output").text(like);
    // $("#output").text(exercise);
    // $("#output").text(food);
    // $("#output").text(sleep);
    // $("#output").text(dog);

    $("#output").show();
    // event.preventDefault();
  });
});
