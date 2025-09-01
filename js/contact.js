console.log("contact")
//
document.addEventListener("DOMContentLoaded", () => {
    //charger le HTML
  const form = document.getElementById("contactForm");
  
  const modal = new bootstrap.Modal(document.getElementById("confirmationModal"));

  form.addEventListener("submit", function (event) {
   
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
    } else {
      // Si tout est valide → afficher modale
      modal.show();
      form.reset();
      form.classList.remove("was-validated");
    }
  });
});