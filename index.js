function getAnswer() {
    var qaElement = document.querySelectorAll('.faq-card__question-answer');
    Array.from(qaElement).forEach(function (element) {
        element.onclick = function (e) {
            e.preventDefault();
            var questionElement = element.querySelector('.faq-card__question');
            var answerElement = element.querySelector('.faq-card__answer');
            var arrowElement = element.querySelector('.faq-card__arrow');
            if (arrowElement.classList.contains('faq-card__arrow--up')) {
                questionElement.classList.remove('faq-car__question--bold');
                answerElement.classList.remove('faq-card__answer-click');
                arrowElement.classList.remove('faq-card__arrow--up');
            } else {
                questionElement.classList.add('faq-car__question--bold');
                answerElement.classList.add('faq-card__answer-click');
                arrowElement.classList.add('faq-card__arrow--up');
            }
        }
    });
}