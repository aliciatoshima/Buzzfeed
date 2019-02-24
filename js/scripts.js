

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

    var pinapple = new Image();
      pineapple.src = "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=598&name=PrisonMike.jpeg";

    var purrito = new Image();
      purrito.src = "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=598&name=PrisonMike.jpeg";

    var bean_bag = new Image();
      bean_bag.src = "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=598&name=PrisonMike.jpeg";

    var img = new Image();
      img.src = "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=598&name=PrisonMike.jpeg";

    var concat = sortAlpha(like.concat(exercise).concat(food).concat(sleep).concat(dog));

    if (name) {
       name;
       debugger;
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
    $("#output").append(img);
    $("#output").show();

  });
});
