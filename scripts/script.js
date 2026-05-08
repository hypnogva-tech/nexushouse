// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const icon = question.querySelector('i');

        if (answer.style.display === 'block') {
            answer.style.display = 'none';
            icon.classList.remove('fa-chevron-up');
            icon.classList.add('fa-chevron-down');
        } else {
            // Fermer toutes les autres réponses
            document.querySelectorAll('.faq-answer').forEach(ans => {
                ans.style.display = 'none';
            });
            document.querySelectorAll('.faq-question i').forEach(i => {
                i.classList.remove('fa-chevron-up');
                i.classList.add('fa-chevron-down');
            });

            // Ouvrir la réponse cliquée
            answer.style.display = 'block';
            icon.classList.remove('fa-chevron-down');
            icon.classList.add('fa-chevron-up');
        }
    });
});

// Formulaire à étapes (exemple basique)
const form = document.getElementById('estimationForm');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();

        // Récupérer les valeurs du formulaire
        const canton = document.getElementById('canton').value;
        const typeBien = document.getElementById('type-bien').value;
        const surfaceToit = document.getElementById('surface-toit').value;

        // Afficher un message de confirmation (à remplacer par une logique réelle)
        alert(`Merci pour votre demande !\n\nCanton: ${canton}\nType de bien: ${typeBien}\nSurface du toit: ${surfaceToit} m²\n\nUn expert vous contactera sous 24h.`);
    });
}

// Animation au scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < 100 && rect.bottom > 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
});

// Initialiser les animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Mettre à jour les étapes du formulaire (optionnel)
const formSteps = document.querySelectorAll('.form-steps .step');
formSteps.forEach((step, index) => {
    step.addEventListener('click', () => {
        formSteps.forEach(s => s.classList.remove('active'));
        step.classList.add('active');
    });
});
