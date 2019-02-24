

$(document).ready(function() {
  $("form#Buzzfeed").submit(function(event) {
    event.preventDefault();

    var name = $("input#name").val();

    var sortAlpha = function(text) {
    return text.split('').sort().join('');
    };

    var like = $("input:radio[name=like]:checked").val();
    var exercise = $("input:radio[name=exercise]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var sleep = $("input:radio[name=sleep]:checked").val();
    var dog = $("input:radio[name=dog]:checked").val();

    var concat = sortAlpha(like.concat(exercise).concat(food).concat(sleep).concat(dog));

    if (name) {
       name;
       debugger;
      if (concat.match(/^.aaa*/) || concat.match(/^*aa*/)) {
         answer = "pinapple Nemo";
      } else if (concat.match(/^*bbb*/) || concat.match(/^*bb*/)) {
         answer = "Purrito Nemo";
      } else if (concat.match(/^*ccc*/) || concat.match(/^*cc*/)) {
         answer = "Bean Bag Nemo!";
      } else {
         answer ="Christmas Nemo, just because!"
      }
    } else {
       name = "Kaonashi";
      if (concat.match(/^.aaa*/) || concat.match(/^*aa*/)) {
         answer = "pinapple Nemo";
      } else if (concat.match(/^*bbb*/) || concat.match(/^*bb*/)) {
         answer = "Purrito Nemo";
      } else if (concat.match(/^*ccc*/) || concat.match(/^*cc*/)) {
         answer = "Bean Bag Nemo!";
      } else {
         answer ="Christmas Nemo, just because!"
      }
    }

    $("#name1").text(name);
     $("#answer1").text(answer);
    // $("#output").text(exercise);
    // $("#output").text(food);
    // $("#output").text(sleep);
    // $("#output").text(dog);

    $("#output").show();
    // event.preventDefault();
  });
});
