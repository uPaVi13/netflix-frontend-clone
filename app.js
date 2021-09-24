let questions = document.querySelectorAll('.question');

questions[0].addEventListener('click', function() {
  removeAnswer();
  document.querySelectorAll('.q1')[1].classList.add('active');
});

questions[1].addEventListener('click', function() {
  removeAnswer();
  document.querySelectorAll('.q2')[1].classList.add('active');
});

questions[2].addEventListener('click', function() {
  removeAnswer();
  document.querySelectorAll('.q3')[1].classList.add('active');
});

questions[3].addEventListener('click', function() {
  removeAnswer();
  document.querySelectorAll('.q4')[1].classList.add('active');
});

questions[4].addEventListener('click', function() {
  removeAnswer();
  document.querySelectorAll('.q5')[1].classList.add('active');
});

questions[5].addEventListener('click', function() {
  removeAnswer();
  document.querySelectorAll('.q6')[1].classList.add('active');
});

function removeAnswer() {
  let answers = document.querySelectorAll('.answer');
  for(let i = 0; i < 6; i++) {
    answers[i].classList.remove('active');
  }
}
