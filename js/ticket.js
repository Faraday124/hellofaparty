window.addEventListener('DOMContentLoaded', event => {
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
    event.preventDefault();

    document.getElementById('spinner').style.display = 'block';
    document.getElementById('spinner-overlay').style.display = 'block';

    const formData = new FormData(this);

    console.log(formData);

    let count = 1;

    for (const key of formData.keys()) {
      if (key.includes('guest') && formData.get(key)) {
        count++;
      }
    }

    const price = count * 85;
    const title = formData.get('name') + '- HOP';

    // Perform asynchronous form submission
    fetch('https://script.google.com/macros/s/AKfycbyvFmI6Vj7N9ClqCJd6NVYTLw1zluYTfUu-ZCIvz6h6PUWyj6wNJudRTvoCq_2tQZQDiA/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          document.getElementById('spinner').style.display = 'none';
          document.getElementById('spinner-overlay').style.display = 'none';
          window.location.href = `/hellofaparty/success.html?title=${title}&price=${price}`;
        } else {
          // Handle error response
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => {
        // Handle error (e.g., show error message)
        console.error('Error submitting form:', error);
        // Optionally update UI or show error message
      });
  });
});
