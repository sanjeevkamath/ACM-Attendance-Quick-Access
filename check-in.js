const setup = document.querySelector('#setup');
const display = document.querySelector('#display');
const form = document.querySelector('#event-form');
const eventName = document.querySelector('#event-name');
const eventTitle = document.querySelector('#event-title');
const heading = document.querySelector('#display-heading');
const back = document.querySelector('#edit-event');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const title = eventName.value.trim();
  eventTitle.textContent = title;
  eventTitle.hidden = title === '';
  setup.hidden = true;
  display.hidden = false;
  back.hidden = false;
  heading.focus();
});

back.addEventListener('click', () => {
  display.hidden = true;
  back.hidden = true;
  setup.hidden = false;
  eventName.focus();
});
