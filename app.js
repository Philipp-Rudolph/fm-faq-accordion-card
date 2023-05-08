const accordionContent = document.querySelectorAll(".card-body-item");

accordionContent.forEach((item, index) => {
  let question = item.querySelector(".question");
  let answer = item.querySelector(".answer");
  let arrow = item.querySelector(".arrow");
  question.addEventListener("click", () => {
    console.log(answer);
    item.classList.toggle("open");
    if (item.classList.contains("open")) {
      answer.style.height = `${answer.scrollHeight + 15}px`;
      question.firstElementChild.style.fontWeight = "700";
      arrow.style.transform = "rotate(180deg)";
    } else {
      answer.style.height = "0px";
      question.firstElementChild.style.fontWeight = "normal";
      arrow.style.transform = "rotate(0deg)";
    }
    removeIndex(index);
  });
});

function removeIndex(index) {
  accordionContent.forEach((item2, index2) => {
    if (index2 !== index) {
      item2.classList.remove("open");
      item2.querySelector(".answer").style.height = "0px";
      item2.querySelector(".question").firstElementChild.style.fontWeight =
        "normal";
      item2.querySelector(".arrow").style.transform = "rotate(0deg)";
    }
  });
}
