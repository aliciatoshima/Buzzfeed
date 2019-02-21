
// Addition Section:


// User interface (or front-end) logic:

// Business logic not included because it will remain the same.

$(document).ready(function() {
  $("form#triangle").submit(function() {

    var input1 = parseInt($("input#input1").val());
    var input2 = parseInt($("input#input2").val());
    var input3 = parseInt($("input#input3").val());


    if (input1 === input2 && input2 === input3) {
      answer = "Equilateral"
    } else if (input1+ input2 <= input3
      || input2+ input3 <= input2
      || input3+ input1 <= input2 ) {
      answer = "Not a Triangle!!!"
    } else if ((input1 !== input2 && input2 === input3)
    || (input1 !== input2 && input1 === input3)
    || (input3 !== input2 && input2 === input1)
  ) {
    answer = "Isosceles"
    } else {
      answer = "scalene"
    }

    $("#output").text(answer);
    //$("#output").show();

    event.preventDefault();
  });
});
