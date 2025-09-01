// Données de la FAQ
const faqData = [
	{
		question: "Quelle est la durée de la garantie du produit ?",
		answer: "La garantie est de 2 ans à compter de la date d'achat."
	},
	{
		question: "Puis-je retourner le produit si je ne suis pas satisfait ?",
		answer: "Oui, vous disposez de 30 jours pour retourner le produit."
	},
	{
		question: "Le produit est-il compatible avec tous les smartphones ?",
		answer: "Oui, il est compatible avec la plupart des smartphones récents (iOS et Android)."
	},
	{
		question: "Comment suivre ma commande ?",
		answer: "Après l'achat, vous recevrez un email avec un lien de suivi de votre commande."
	},
	{
		question: "Proposez-vous une assistance technique ?",
		answer: "Oui, notre équipe support est disponible 7j/7 par email et téléphone."
	}
];

// Fonction pour générer la FAQ dynamiquement
function renderFAQ() {
    // Sélectionner le conteneur HTML où afficher la FAQ
	const container = document.getElementById('faq');
    // Vérifie si le conteneur existe.
	if (!container) return;
	container.innerHTML = '';
    // Parcourir chaque question/réponse du tableau et prévoir deux propriétés 
    // item représente un élément du tableau (question/réponse)
    // index représente la position de l'élément dans le tableau
	faqData.forEach((item, index) => {
		// Création des éléments
		const faqItem = document.createElement('div');
        // Ajout de la classe pour le style
		faqItem.className = 'faq-item';

		const questionBtn = document.createElement('button');
		questionBtn.className = 'faq-question';
        // Methode setattribute pour ajouter/modifier un attribut html.
		questionBtn.setAttribute('aria-expanded', 'false'); // Explique au lecteur d'écran que la réponse est cachée par défaut
		questionBtn.setAttribute('aria-controls', `faq-answer-${index}`); // Cet attribut indique quel élément du DOM est contrôlé par chacun des boutons.
		questionBtn.id = `faq-question-${index}`; // Identifiant unique pour chaque question
		questionBtn.innerHTML = `<span class="faq-icon">&#9654;</span> ${item.question}`; // Contenu du bouton

		const answerDiv = document.createElement('div'); // Crée un nouvel élément <div> qui servira à afficher la réponse à la question
		answerDiv.className = 'faq-answer'; // Ajoute la classe CSS faq-answer à ce div, pour pouvoir le styliser facilement
		answerDiv.id = `faq-answer-${index}`; //  Donne un identifiant unique à chaque réponse, permet de faire le lien avec le bouton de la question (pour l’accessibilité et le contrôle).
		answerDiv.setAttribute('aria-labelledby', questionBtn.id); // Lien entre la question et la réponse
		answerDiv.hidden = true; // La réponse est cachée par défaut
		answerDiv.textContent = item.answer; // insère le texte de la réponse

		// Gestion du clic
		questionBtn.addEventListener('click', () => {
			const expanded = questionBtn.getAttribute('aria-expanded') === 'true';
			questionBtn.setAttribute('aria-expanded', !expanded);
			answerDiv.hidden = expanded;
			// Animation icône
			const icon = questionBtn.querySelector('.faq-icon');
			if (icon) {
				icon.style.transform = expanded ? 'rotate(0deg)' : 'rotate(90deg)'; // Rotation de l'icône
				icon.style.transition = 'transform 0.2s'; // Ajoute une transition pour l'animation
			}
		});

		faqItem.appendChild(questionBtn);
		faqItem.appendChild(answerDiv);
		container.appendChild(faqItem);
	});
}
