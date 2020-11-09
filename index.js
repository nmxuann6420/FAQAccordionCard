function getAnswer() {
    var arrowElement = document.querySelectorAll('.faq-card__arrow');
    Array.from(arrowElement).forEach(function (element) {
        element.onclick = function (e) {
            var groupQA = element.parentElement;
            var questionElement = groupQA.querySelector('.faq-card__question');
            var answerElement = groupQA.querySelector('.faq-card__answer');
            if(element.classList.contains('faq-card__arrow--up')) {
                questionElement.classList.remove('faq-car__question--bold');
                answerElement.classList.remove('faq-card__answer-click');
                element.classList.remove('faq-card__arrow--up');
            } else {
                questionElement.classList.add('faq-car__question--bold');
                answerElement.classList.add('faq-card__answer-click');
                element.classList.add('faq-card__arrow--up');
            }
        }
    });
}