const letters = "abcdefghijklmnopqrstuvwxyz";

let interval = null;

document.querySelector("h1").onmouseover = (e) => {
  let iterations = 0;
  clearInterval(interval);

  interval = setInterval(() => {
    e.target.innerText = e.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return e.target.dataset.text[index];
        }

        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= e.target.dataset.text.length) clearInterval(interval);

    iterations += 1 / 2;
  }, 50);
};

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// let interval = null;

// document.querySelector("h1").onmouseover = (event) => {
//   let iteration = 0;

//   clearInterval(interval);

//   interval = setInterval(() => {
//     event.target.innerText = event.target.innerText
//       .split("")
//       .map((letter, index) => {
//         if (index < iteration) {
//           return event.target.dataset.text[index];
//         }

//         return letters[Math.floor(Math.random() * 26)];
//       })
//       .join("");

//     if (iteration >= event.target.dataset.text.length) {
//       clearInterval(interval);
//     }

//     iteration += 1 / 3;
//   }, 30);
// };
