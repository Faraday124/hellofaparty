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
    const snackbar = document.getElementById('snackbar');

  function showToast() {
    snackbar.style.display = 'block';
    snackbar.className = "show";
    setTimeout(function () {
      snackbar.style.display = 'none';
    }, 1500);
    // snackbar.className = "show";

    // After 3 seconds, remove the show class from DIV
    // setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000);
  }

  receiver.addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    showToast();
  });

  accountNumber.addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    showToast();
  });

  transferTitle.addEventListener('click', function() {
    this.select();
    this.setSelectionRange(0, 99999);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();

    showToast();
  });



});
