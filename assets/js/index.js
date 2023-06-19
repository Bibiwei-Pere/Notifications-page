const markRead = document.querySelector('.mark');
const unreadCircles = document.querySelectorAll('.unread-dot');
const notificationCount = document.querySelector('.notification-count');
const notificationElements = document.querySelectorAll('.box');
const unreadElements = document.querySelectorAll('.unread');
const title = document.querySelectorAll('.title');

// Update the notification count text with the number of unread notifications
notificationCount.innerHTML = `<p class="title">Notifications</p><div class="number">${unreadElements.length}</div>`;

//Hide unread elements on click of "Mark all as read" button
markRead.addEventListener('click', () => {
  unreadCircles.forEach((div) => {
    div.style.display = 'none';
  });
  document.querySelectorAll('.box.unread').forEach(box => {
    box.classList.remove('unread');
  }); 
  //when button is clicked, notification number resets to 0
  notificationCount.innerHTML = `<p class="title">Notification</p><div class="number">0</div>`;
});

// Add event listener to each box element
notificationElements.forEach((box) => {
  box.addEventListener('click', () => {
    // Remove the unread class from the clicked box element
    box.classList.remove('unread');

    //Get rid of unread circle when box is clicked
    const unreadCircle = box.querySelector('.unread-dot');
    if (unreadCircle) {
      unreadCircle.remove();
    }
    // Update the notification count text
    const unreadElement = document.querySelectorAll('.unread');
      notificationCount.innerHTML = `<p class="title">Notifications</p><div class="number">${unreadElement.length}</div>`;
  });
});
