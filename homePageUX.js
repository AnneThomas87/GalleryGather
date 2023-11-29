

var map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

let tabs = ['Spectacle', 'Concert', 'Vernissage', 'Exposition'];
const recupSelect = document.querySelector('.selectAll');
console.log(recupSelect);
const select = document.createElement("select");

for (let i = 0; i < tabs.length; i++) {
    let element = tabs[i];

    const option = document.createElement('option');
    option.textContent = element;

    select.appendChild(option);
    select.classList.add('select');
}
recupSelect.appendChild(select);

const verni= document.querySelectorAll('.vernissage')
console.log(verni);

const present= document.querySelectorAll('.presentation')
console.log(present);


function filterByType(type) {
    const filtered = [...present].filter(function(pres) {
        return pres.classList.contains(type)
        })
        return filtered
}


console.log(filterByType("concert"));

// recupSelect.addEventListener("input", function(event) {
// console.log(event.target.value.toLowerCase())
// const type = event.target.value.toLowerCase()
// const events = filterByType(type)
// console.log(events)
// })
// ----------------------------


recupSelect.addEventListener("input", function(event) {
    const type = event.target.value.toLowerCase();
    const events = filterByType(type);
    present.forEach(function(pres) {
        if (events.includes(pres)) {
            pres.style.display = "block";
        } else {
            pres.style.display = "none";
        }
    });
});