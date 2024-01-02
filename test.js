function verifier() {
   
    var nomSociete = document.getElementById('nomSociete');
    var email = document.getElementById('email');
    var adresse = document.getElementById('adresse');
    var numeroTelephone = document.getElementById('numeroTelephone');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    if (nomSociete.value.length < 3) {
        alert("Veuillez entrer un nom de société valide (au moins 3 caractères).");
        return false;
    }

    
    if (!emailRegex.test(email.value)) {
        alert("Veuillez entrer une adresse email valide.");
        return false;
    }

   
    if (adresse.value.length < 5) {
        alert("Veuillez entrer une adresse de société valide (au moins 5 caractères).");
        return false;
    }

    
    if (numeroTelephone.value.length < 3) {
        alert("Veuillez entrer un numéro de téléphone valide (au moins 3 caractères).");
        return false;
    }

    
    return true;
}
