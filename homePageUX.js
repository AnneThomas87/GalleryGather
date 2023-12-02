

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


// --------------fin de la map 

let tabs = ['Spectacle', 'Concert', 'Vernissage', 'Exposition'];
const recupSelect = document.querySelector('.selectAll');
console.log(recupSelect);
const select = document.createElement("select");

select.id="selection";

let content = "";








for (let i = 0; i < tabs.length; i++) {
    let element = tabs[i];

    const option = document.createElement('option');
    option.textContent = element;

    select.appendChild(option);
    select.classList.add('select');
}

// ----------------fin de selectAll

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
// ---------------fin de levent dispo en bas de la map qui reagis a mes options 

const evenementsParCategorie = [
      {
        nom: "Concert Jazz",
        photo: "./Asset/expo1.jpg",
        description: "Une soirée de jazz en live avec des artistes talentueux.",
        localisation: "Salle de concert XYZ",
        style: "Jazz",
        prix: 20.00,
        categorie: "Concerts"
      },
      {
        nom: "Concert Pop-Rock",
        photo: "./Asset/expo1.jpg",
        description: "Une soirée électrique avec des groupes de pop-rock populaires.",
        localisation: "Stade de la Musique",
        style: "Pop-Rock",
        prix: 25.00,
        categorie: "Concerts"
      },
      {
        nom: "Concert Acoustique Intime",
        photo: "./Asset/expo1.jpg",
        description: "Une expérience musicale intime avec des performances acoustiques.",
        localisation: "Café Acoustique",
        style: "Acoustique",
        prix: 12.00,
        categorie: "Concerts"
      },
      {
        nom: "Concert Acoustique Intime",
        photo: "./Asset/expo1.jpg",
        description: "Une expérience musicale intime avec des performances acoustiques.",
        localisation: "Café Acoustique",
        style: "Acoustique",
        prix: 12.00,
        categorie: "Concerts"
      },
 
      {
        nom: "Exposition d'Art Moderne",
        photo: "./Asset/expo2.jpg",
        description: "Découvrez des œuvres d'art moderne par des artistes contemporains.",
        localisation: "Galerie d'art ABC",
        style: "Art Moderne",
        prix: 10.00,
        categorie: "Expositions"
      },
      {
        nom: "Exposition Photo Nature",
        photo: "./Asset/expo2.jpg",
        description: "Une exposition captivante mettant en valeur la beauté de la nature.",
        localisation: "Centre d'exposition Nature",
        style: "Photographie",
        prix: 12.00,
        categorie: "Expositions"
      },
      {
        nom: "Exposition Photo Nature",
        photo: "./Asset/expo2.jpg",
        description: "Une exposition captivante mettant en valeur la beauté de la nature.",
        localisation: "Centre d'exposition Nature",
        style: "Photographie",
        prix: 12.00,
        categorie: "Expositions"
      },
      {
        nom: "Exposition Photo Urbaine",
        photo: "./Asset/expo2.jpg",
        description: "Explorez la vie urbaine à travers l'objectif de photographes talentueux.",
        localisation: "Centre d'exposition Urbaine",
        style: "Photographie",
        prix: 10.00,
        categorie: "Expositions"
      },
  
      {
        nom: "Spectacle de Magie",
        photo: "./Asset/expo3.jpg",
        description: "Un spectacle magique plein d'illusions et de mystère.",
        localisation: "Théâtre Magique",
        style: "Magie",
        prix: 18.00,
        categorie: "Spectacles"
      },
      {
        nom: "Spectacle de Théâtre Dramatique",
        photo: "./Asset/expo3.jpg",
        description: "Une performance théâtrale émouvante qui explore des thèmes dramatiques.",
        localisation: "Théâtre Dramatique",
        style: "Théâtre",
        prix: 15.00,
        categorie: "Spectacles"
      },
  
      {
        nom: "Vernissage d'Art Contemporain",
        photo: "./Asset/expo4.jpg",
        description: "Rencontrez les artistes lors du vernissage d'une exposition d'art contemporain.",
        localisation: "Espace d'Art Contemporain",
        style: "Art Contemporain",
        prix: 8.00,
        categorie:  "Vernissages"
      },
      {
        nom: "Vernissage de graffiti",
        photo: "./Asset/expo4.jpg",
        description: "Rencontrez les artistes lors du vernissage d'une exposition d'art graffiti.",
        localisation: "Espace d'Art Graffiti",
        style: "Graffiti",
        prix: 8.00,
        categorie:  "Vernissages"
      },
      {
        nom: "Vernissage des enfants du monde",
        photo: "./Asset/expo4.jpg",
        description: "Rencontrez les artistes lors du vernissage d'une exposition réaliser par les enfants.",
        localisation: "Espace d'Art des enfants",
        style: "Enfant",
        prix: 8.00,
        categorie:  "Vernissages"
      },
      {
        nom: "Vernissage des enfants du monde",
        photo: "./Asset/expo4.jpg",
        description: "Rencontrez les artistes lors du vernissage d'une exposition réaliser par les enfants.",
        localisation: "Espace d'Art des enfants",
        style: "Enfant",
        prix: 8.00,
        categorie:  "Vernissages"
      }
    ]
  

  const main = document.querySelector("main");
  const categories = ["Concerts","Vernissages","Expositions","Spectacles"]

  categories.forEach(category => {
    content += `<h2 class="${category}" id="${category}">${category}</h2><section class="${category}">`;
    
    //let mesEvents=[];
    const evenements = evenementsParCategorie.forEach(function(eventS){
      if(eventS.categorie===category){
        content += `
        <article>
        <figure>
            <img class="event-photo" src="${eventS.photo}" alt="">
            <div class="texte">
            <figcaption class="event-nom">${eventS.nom}</figcaption>
            <figcaption class="event-description">${eventS.description}</figcaption>
            <figcaption class="event-localisation">${eventS.localisation}</figcaption>
            <figcaption class="event-style">${eventS.style}</figcaption>
            <figcaption> ${eventS.prix} Euros</figcaption>
        </figure>
          </div>
        </article>`;
  }
  
    })
    content += "</section>";

  });

main.innerHTML = content;
main.classList.add('presentation');

