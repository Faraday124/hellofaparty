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
  document.getElementById('transfer-title').value = title || 'Title';
  document.getElementById('amount').value = (price || '0') + ' PLN' || 'Price';

  const receiver = document.getElementById('receiver');
  const accountNumber = document.getElementById('account-number');
  const transferTitle = document.getElementById('transfer-title');

  receiver.addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  });

  accountNumber.addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  });

  transferTitle.addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
  });

});
