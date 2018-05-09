$(document).ready(() => {
  const toggleBtn = $('.toggle-button');

  toggleBtn.click(() => {
    $('#sidebar-wrapper').toggleClass('active');
  })
});