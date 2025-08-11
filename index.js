const faqQuestions = document.querySelectorAll('.faq__question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const icon = question.querySelector('.faq__toggle-icon');
    const answer = item.querySelector('.faq__answer');

    const isOpen = item.classList.contains('faq__item--open');

    if (isOpen) {
      item.classList.remove('faq__item--open');
      if (answer) answer.style.display = 'none';
      if (icon) {
        icon.src = 'FAQ PROJECTS/assets/images/icon-plus.svg';
        icon.alt = 'Expand';
      }
    } else {
      item.classList.add('faq__item--open');
      if (answer) answer.style.display = 'block';
      if (icon) {
        icon.src = 'FAQ PROJECTS/assets/images/icon-minus.svg';
        icon.alt = 'Collapse';
      }
    }
  });

  question.setAttribute('tabindex', '0');
  question.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      question.click();
    }
  });
});

document.querySelectorAll('.faq__answer').forEach((ans, idx) => {
  if (idx !== 0) ans.style.display = 'none';
});


