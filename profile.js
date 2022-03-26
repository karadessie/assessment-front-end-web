function colorEvent(event) {
      alert ('Green')
}
function placeEvent(event) {
    alert ('New Jersey')
}
function ritualEvent(event) {
    alert ('Graduation!')
}

const form = document.querySelector('form')
color.addEventListener('click', colorEvent)
place.addEventListener('click', placeEvent)
ritual.addEventListener('click', ritualEvent)
