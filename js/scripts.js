$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const name1Input = $("input#name1").val();
    const name2Input = $("input#name2").val();
    const descriptionInput= $("input#description").val();
    const dateInput = $("input#date").val();
    const startInput = $("input#start").val();
    const endInput = $("input#end").val();

    $(".name1").text(name1Input);
    $(".name2").text(name2Input);
    $(".description").text(descriptionInput);
    $(".date").text(dateInput);
    $(".start").text(startInput);
    $(".end").text(endInput);

    $("#conformation").show();
  });
});