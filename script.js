let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("carousel-slide");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 20000); // Change image every 2 seconds
}

document.querySelector('.carousel-next').addEventListener('click', () => {
  slideIndex++;
  showSlides();
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
  slideIndex--;
  showSlides();
});

/*********************************************/
/***************Mail crypter******************/
/*********************************************/


// Fonction pour décrypter l'adresse e-mail
function decryptEmail(encodedString) {
    var email = "";
    for (var i = 0; i < encodedString.length; i += 2) {
        email += String.fromCharCode(parseInt(encodedString.substr(i, 2), 16));
    }
    return email;
}

// Décrypte l'adresse e-mail et l'affiche dans le document
var decryptedEmail = decryptEmail("6a61736f6e2e6475707579407366722e6672");//adresse email crypter en hexadécimal
document.getElementById("email").innerText = decryptedEmail;
document.getElementById("email").setAttribute("href", "mailto:" + decryptedEmail);
