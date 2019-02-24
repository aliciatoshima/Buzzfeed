

$(document).ready(function() {
  $("form#Buzzfeed").submit(function(event) {
    event.preventDefault();
    // $("img#output").empty()

    var name = $("input#name").val();

    var sortAlpha = function(text) {
    return text.split('').sort().join('');
    };

    var like = $("input:radio[name=like]:checked").val();
    var exercise = $("input:radio[name=exercise]:checked").val();
    var food = $("input:radio[name=food]:checked").val();
    var sleep = $("input:radio[name=sleep]:checked").val();
    var dog = $("input:radio[name=dog]:checked").val();

    var pineapple = new Image();
    pineapple.src = "images/pineapple.jpg";
    pineapple.alt = "pineapple cat";
    pineapple.style.width = "300px";

    var purrito = new Image();
    purrito.src = "images/purrito.JPG";
    purrito.alt = "purrito cat";
    purrito.style.width = "300px";

    var bean_bag = new Image();
    bean_bag.src = "images/bean_bag.JPG";
    bean_bag.alt = "bean bag cat";
    bean_bag.style.width = "300px";

    var img = new Image();
    img.src = "images/christmas.JPG";
    img.alt = "christmas cat";
    img.style.width = "300px";

    var concat = sortAlpha(like.concat(exercise).concat(food).concat(sleep).concat(dog));

    if (name) {
      debugger;
       name;
      if (concat.match(/^.aaa*/) || concat.match(/^*aa*/)) {
         answer = "pinapple Nemo";
         img = pineapple;
      } else if (concat.match(/^*bbb*/) || concat.match(/^*bb*/)) {
         answer = "Purrito Nemo";
         img = purrito;
      } else if (concat.match(/^*ccc*/) || concat.match(/^*cc*/)) {
         answer = "Bean Bag Nemo!";
         img = bean_bag;
      } else {
         answer ="Christmas Nemo, just because!"
         img;
      }
    } else {
       name = "Kaonashi";
      if (concat.match(/^.aaa*/) || concat.match(/^*aa*/)) {
         answer = "pinapple Nemo";
         img = pineapple;
      } else if (concat.match(/^*bbb*/) || concat.match(/^*bb*/)) {
         answer = "Purrito Nemo";
         img = purrito;
      } else if (concat.match(/^*ccc*/) || concat.match(/^*cc*/)) {
         answer = "Bean Bag Nemo!";
         img = bean_bag;
      } else {
         answer ="Christmas Nemo, just because!"
         img;
      }
    }

    $("#name1").text(name);
    $("#answer1").text(answer);
    $("#output").append(img).last();
    $("#output").show();

  });
});
