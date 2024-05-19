const events = [
    {
        title: "Event Title 1",
        date: "2024-06-25",
        location: "Virtual",
        description: "Join us for an exciting event filled with...",
        imgSrc: "../assets/event1.jpg"
    },
    {
        title: "Event Title 2",
        date: "2024-07-10",
        location: "Metaverse Convention Center",
        description: "Don't miss out on...",
        imgSrc: "../assets/event2.jpg"
    }
];

function displayEvents() {
    const eventList = document.querySelector('.event-list');
    eventList.innerHTML = '';
    events.forEach(event => {
        const eventItem = document.createElement('div');
        eventItem.classList.add('event-item');
        eventItem.innerHTML = `
            <img src="${event.imgSrc}" alt="${event.title}">
            <h3>${event.title}</h3>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p>${event.description} <a href="event-details.html">Read more</a></p>
            <button onclick="rsvpEvent('${event.title}')">RSVP</button>
        `;
        eventList.appendChild(eventItem);
    });
}

function rsvpEvent(eventName) {
    alert(`You have RSVP'd to ${eventName}`);
}

function toggleAddEventForm() {
    document.getElementById('add-event-form').classList.toggle('hidden');
}

document.getElementById('add-event-btn').addEventListener('click', toggleAddEventForm);

document.querySelector('#add-event-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const location = document.getElementById('event-location').value;
    const description = document.getElementById('event-description').value;
    const newEvent = {
        title,
        date,
        location,
        description,
        imgSrc: "../assets/default-event.jpg"
    };
    events.push(newEvent);
    displayEvents();
    toggleAddEventForm();
});

window.onload = displayEvents;
