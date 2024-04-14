window.addEventListener('DOMContentLoaded', event => {
  console.log('sffs');
  "use strict";
  $("#buy-ticket-form").on("click", ".remove-btn", function () {
    $(this).closest("fieldset.guest").remove();
  });

  $("#buy-ticket-form").on("click", ".add-btn", function () {
    // Your click event handler code here

    var newRow = $('#guest-template .row').clone();
    console.log(newRow);

    $("#buy-ticket-form fieldset.guest:last-of-type").after(newRow);

  });
});
