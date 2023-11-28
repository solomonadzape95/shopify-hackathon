"use strict";

const menuBtn = document.querySelector(".navBtn2");
const alertBtn = document.querySelector(".navBtn");
const menuModal = document.querySelector(".menu-modal");
const progressBar = document.querySelector(".progress-bar");
const closeBtn = document.querySelector(".closeBtn");
const progress = document.querySelector(".progress-text");
const dropdownHead = document.querySelector(".dropdown-head");
const dropdown = document.querySelector(".setup-guide");
const openFormBtn = document.getElementById("openForm");
const closeFormBtn = document.getElementById("closeForm");
const options = document.querySelectorAll(".option");
const checks = document.querySelectorAll(".checkBtn");
menuModal.style.height;
options[0].classList.add("active");
dropdownHead.style.cursor = "pointer";
let activeOpt = document.querySelector(".active");

closeBtn.addEventListener("click", () => {
  document.querySelector(".select-plan").style.display = "none";
});
menuBtn.addEventListener("click", () => {
  document.querySelector(".alerts").classList.add("hidden");
  document.querySelector(".menu-modal").classList.toggle("hidden");
});

alertBtn.addEventListener("click", () => {
  document.querySelector(".menu-modal").classList.add("hidden");
  document.querySelector(".alerts").classList.toggle("hidden");
});
const openForm = () => {
  dropdown.classList.remove("dropdown");
  closeFormBtn.classList.remove("hidden");
  openFormBtn.classList.add("hidden");
  dropdownHead.style.cursor = "default";
  activeOpt = document.querySelector(".active");
};
const closeForm = () => {
  dropdown.classList.toggle("dropdown");
  closeFormBtn.classList.add("hidden");
  openFormBtn.classList.remove("hidden");
  dropdownHead.style.cursor = "pointer";
};

const switchOpt = () => {
  let prev;
  let nextArr = [];
  checks.forEach((check) => {
    if (check.ariaChecked === "false") {
      nextArr.push(check.parentElement.parentElement);
    } else {
      if (check.parentElement.parentElement.classList.contains("active")) {
        prev = check.parentElement.parentElement;
        prev.classList.remove("active");
      }
    }
  });

  if (nextArr.length > 0) {
    nextArr.forEach((item) => {
      item.classList.remove("active");
    });

    nextArr[0].classList.add("active");
    activeOpt = document.querySelector(".active");
  } else {
    prev.classList.add("active");
  }
};
options.forEach((option) => {
  let header = option.querySelector("p");
  header.addEventListener("click", () => {
    options.forEach((opt) => {
      opt.classList.remove("active");
    });
    option.classList.add("active");
  });
});
const updateChecks = () => {
  let checkedOpts = 0;
  let width = 0;
  checks.forEach((check) => {
    check.ariaChecked === "true" ? checkedOpts++ : "";
  });
  progress.innerText = `${checkedOpts} / 5 completed`;
  width = (checkedOpts * 100) / 5;
  width = width.toString() + "%";
  progressBar.style.width = width;
};
checks.forEach((check) => {
  const a = () => {
    check.ariaChecked = "false";
    updateChecks();
  };
  const b = () => {
    check.ariaChecked = "true";
    updateChecks();
    switchOpt();
  };
  const optCheck = () => {
    check.ariaChecked === "true" ? a() : b();
  };
  check.addEventListener("click", optCheck);
});

openFormBtn.addEventListener("click", () => {
  dropdown.classList.contains("dropdown") ? openForm() : "";
});

closeFormBtn.addEventListener("click", () => {
  !dropdown.classList.contains("dropdown") ? closeForm() : console.log("Hi");
});
