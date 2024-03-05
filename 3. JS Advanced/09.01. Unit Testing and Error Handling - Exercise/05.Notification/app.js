function notify(message) {
  // Get the notification div
  var notificationDiv = document.getElementById('notification');

  // Set the message
  notificationDiv.textContent = message;

  // Show the div
  notificationDiv.style.display = 'block';

  // Add a click event listener to hide the div when clicked
  notificationDiv.addEventListener('click', function () {
    notificationDiv.style.display = 'none';
  });
}
