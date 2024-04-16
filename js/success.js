window.addEventListener('DOMContentLoaded', event => {
  "use strict";

  function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
  }

  // Get the title and price query parameters from the URL
  const title = getQueryParam('title');
  const price = getQueryParam('price');

  // Set the values as placeholders for the input fields
  document.getElementById('transfer-title').placeholder = title || 'Title';
  document.getElementById('amount').placeholder = price + ' PLN' || 'Price';
});
