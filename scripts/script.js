window.addEventListener('DOMContentLoaded', function() {
  var profilePicture = document.querySelector('.profile-picture');

  setInterval(function() {
    profilePicture.classList.toggle('pulse');
  }, 3000);
});
