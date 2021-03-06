const buttons = document.querySelectorAll(".project-selector-button");
const projects = document.querySelectorAll(".project-item");

buttons.forEach(button => {
  button.addEventListener("click", e => {
    buttons.forEach(button => {
      button.classList.remove("active-button");
    })
    e.target.classList.add("active-button");
    projects.forEach(project => {
      let type = project.querySelector(".project-text").innerText;
      if (type.indexOf(e.target.innerText.slice(0, -1)) >= 0 || e.target.innerText == "Все") {
        project.classList.remove("invisible");
      }
      else {
        project.classList.add("invisible");
      }
    })
  })
})

const modalForm = document.querySelector(".modal");
const sloganButton = document.querySelector(".slogan-button");
const modalCloseButton = document.querySelector(".modal-close-button");

sloganButton.addEventListener("click", e => {
  modalForm.classList.add("modal-visible");
  document.body.style.overflow = "hidden";
})

modalCloseButton.addEventListener("click", e => {
  modalForm.classList.remove("modal-visible");
  document.body.style.overflow = "visible";
})

const agreement = document.querySelector("#agreement");
const submitButton = document.querySelector("#modal-button");
agreement.addEventListener("click", у => {
  if (agreement.checked) {
    submitButton.disabled = false;
  }
  else {
    submitButton.disabled = true;
  }
})

submitButton.addEventListener("mouseenter", e => {
  if (agreement.checked) {
    submitButton.classList.add("modal-button-active");
  }
})

submitButton.addEventListener("mouseleave", e => {
  if (agreement.checked) {
    submitButton.classList.remove("modal-button-active");
  }
})