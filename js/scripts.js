
// Addition Section:


// User interface (or front-end) logic:

// Business logic not included because it will remain the same.

$(document).ready(function() {
  $("form#character").submit(function() {
    event.preventDefault();
    var color = parseInt($("input:radio[name=color]:checked").val());
    var movie = parseInt($("input:radio[name=movie]:checked").val());
    var vacation = parseInt($("input:radio[name=vacation]:checked").val());

    var result = color + movie + vacation

    if (result < 4) {
      answer = "Michael Scott"
      var img = new Image();
      img.src = "https://www.bluleadz.com/hs-fs/hubfs/Blog_pics/PrisonMike.jpeg?width=598&name=PrisonMike.jpeg";
    } else if (result > 6) {
      answer = "Pam"
      var img = new Image();
      img.src = "https://uproxx.files.wordpress.com/2016/11/pam-the-office4.jpg?quality=100&w=650";
    } else  {
     answer = "Dwight"
     var img = new Image();
     img.src = "https://www.cheatsheet.com/wp-content/uploads/2018/01/Dwight-Schrute.jpg";
    }

    $("#output").text(answer);
    //$("#output").show();
    $("#output").append(img);
    $("#output").show();

    event.preventDefault();
  });
});
