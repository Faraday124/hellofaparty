const PRICE = 60;

window.addEventListener('DOMContentLoaded', event => {
  "use strict";
  $("#buy-ticket-form").on("click", ".remove-btn", function () {
    $(this).closest("fieldset.guest").remove();
  });

  $("#buy-ticket-form").on("click", ".add-btn", function () {
    // Your click event handler code here

    const formData = new FormData(document.getElementById('buy-ticket-form'));
    const newId = Array.from(formData.keys()).length;

    var newRow = $('#guest-template .row').clone();

    newRow.attr("id", "guest-template-" + newId);

    var newInput = newRow.find('#another-guest');

    newInput.attr("name", "guest-" + newId);

    $("#buy-ticket-form fieldset.guest:last-of-type").after(newRow);

  });

  document.getElementById('buy-ticket-form').addEventListener('submit', function (event) {
    event.preventDefault();

    document.getElementById('spinner').style.display = 'block';
    document.getElementById('spinner-overlay').style.display = 'block';

    const formData = new FormData(this);

    console.log(formData);

    let guests = [];

    for (const key of formData.keys()) {
      if (key.includes('guest') && formData.get(key)) {
        guests.push(formData.get(key))
      }
    }

    const price = (1 + guests.length) * PRICE;
    const friends = guests.length > 0 ? ' i ekipa' : '';
    const title = formData.get('name') + friends +' - HOP';

    formData.append('price', price.toString());
    formData.append('transferTitle', title);
    formData.append('guests', JSON.stringify(guests));

    // Perform asynchronous form submission
    fetch('https://script.google.com/macros/s/AKfycbyvFmI6Vj7N9ClqCJd6NVYTLw1zluYTfUu-ZCIvz6h6PUWyj6wNJudRTvoCq_2tQZQDiA/exec', {
      method: 'POST',
      body: formData
    })
      .then(response => {
        if (response.ok) {
          document.getElementById('spinner').style.display = 'none';
          document.getElementById('spinner-overlay').style.display = 'none';
          let prefix = '';
          const currentPath = window.location.pathname;
          if (currentPath.includes('hellofaparty')) {
            prefix = '/hellofaparty';
          }
          window.location.href = `${prefix}/success.html?title=${title}&price=${price}`;
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
