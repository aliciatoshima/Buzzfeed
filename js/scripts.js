

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
    alert(concat)

    if (name) {
      name;
    } else {
      name = "Kaonashi";
    }

    if (concat.match(/^*aaa*/) || concat.match(/^*aa*/)) {
      alert("pinapple nemo")
    } else if (concat.match(/^*bbb*/) || concat.match(/^*bb*/)) {
      alert("Purrito nemo")
    } else if (concat.match(/^*ccc*/) || concat.match(/^*cc*/)) {
      alert("Bean Bag nemo")
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
