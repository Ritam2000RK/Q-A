const QA = [
  {
    ques: "Do you Support Local Farmers?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    ques: "Do you Use Organic Ingredients?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    ques: "Do you Use Pestisides?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
  {
    ques: "Do you Have Farmer Leader?",
    ans: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est dolore illo dolores quia nemo doloribus quaerat, magni numquam repellat reprehenderit.",
  },
];

const plusBtns = document.querySelectorAll(".plusBtn");
const answer = document.querySelectorAll(".answer");
const horzLine = document.querySelectorAll(".horizontal-line");

plusBtns.forEach((plusBtn, index) => {
  plusBtn.addEventListener("click", () => {
    //check if the current question is already open
    const isOpen = answer[index].classList.contains('show-answer');

    answer.forEach(answer => {
      answer.classList.remove('show-answer');
    })
    
    horzLine.forEach(answer => {
      answer.classList.remove('showHorz');
    })

    if(!isOpen) {
      answer[index].classList.add('show-answer')
      horzLine[index].classList.add('showHorz');
    }
  });
});
