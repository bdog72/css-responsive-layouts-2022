//
//

console.log(123);

const container = document.querySelector('.container');
const signUpBtn1 = document.querySelector('.sign-up-btn1');
const signUpBtn2 = document.querySelector('.sign-up-btn2');

signUpBtn1.addEventListener('click', () => {
  container.classList.toggle('change');
});

signUpBtn2.addEventListener('click', () => {
  container.classList.toggle('change');
});
