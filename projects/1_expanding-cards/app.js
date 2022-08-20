//
//

const panels = document.querySelectorAll('.panel');

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClass();
    panel.classList.add('active');
  });
});

const removeActiveClass = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

// const panels = document.querySelectorAll('.panel');

// panels.forEach((panel) => {
//   panel.addEventListener('click', () => {
//     removeActiveClasses();
//     panel.classList.add('active');
//   });
// });

// const removeActiveClasses = () => {
//   panels.forEach((panel) => {
//     panel.classList.remove('active');
//   });
// };
