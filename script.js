const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

//   Modal open function
const openModal = () => {
  console.log("Modal is Open");
  modal.classList.add("active");
  overlay.classList.add("overlayactive");
};

// Modal close function
const closeModal = () => {
  modal.classList.remove("active");
  overlay.classList.remove("overlayactive");
};

const totalCount = document.getElementById("follow-count");
var count = 0;
totalCount.innerHTML = count;

const followers = () => {
  count++;
  totalCount.innerHTML = count;
};