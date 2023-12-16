<script>
    function verifier() {
        var email = document.getElementById("email").value;
        var numeroTelephone = document.getElementById("numeroTelephone").value;
        var nomSociete = document.getElementById("nomSociete").value;
        var adresse = document.getElementById("adresse").value;
        var commentaire = document.getElementById("commentaire").value;

        // Vérifier l'adresse e-mail
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Veuillez entrer une adresse e-mail valide.");
            return false;
        }

        // Vérifier le numéro de téléphone
        var numeroTelephoneRegex = /^\d{3}-\d{3}-\d{4}$/;
        if (!numeroTelephoneRegex.test(numeroTelephone)) {
            alert("Veuillez entrer un numéro de téléphone valide au format xxx-xxx-xxxx.");
            return false;
        }

        // Vérifier le nom de la société
        if (nomSociete.length < 3) {
            alert("Veuillez entrer un nom de société d'au moins 3 caractères.");
            return false;
        }

        // Vérifier l'adresse
        if (adresse.length < 5) {
            alert("Veuillez entrer une adresse de société d'au moins 5 caractères.");
            return false;
        }

        // Vérifier le commentaire
        if (commentaire.length === 0) {
            alert("Veuillez entrer un commentaire.");
            return false;
        }

        return true;
    }
</script>
