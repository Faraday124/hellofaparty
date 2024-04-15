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

  document.getElementById('buy-ticket-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default form submission

    var formData = new FormData(this); // Get form data

    // Perform asynchronous form submission
    fetch('https://script.google.com/macros/s/AKfycbyvFmI6Vj7N9ClqCJd6NVYTLw1zluYTfUu-ZCIvz6h6PUWyj6wNJudRTvoCq_2tQZQDiA/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        // Handle response (e.g., show success message)
        console.log('Form submission successful');
        // Optionally update UI or show success message
      })
      .catch(error => {
        // Handle error (e.g., show error message)
        console.error('Error submitting form:', error);
        // Optionally update UI or show error message
      });
  });
});
