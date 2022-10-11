const submit = document.getElementById("submit-rating-button");
const ratingOptions = document.querySelectorAll(".rating-button");
const ratingContainer = document.getElementById("rating-container");
const thankContainer = document.getElementById("thank-container");
const selectedRatingMessage = document.getElementById("selectedRatingMessage");
let selectedRating = "";


submit.addEventListener("click", (e) => {
  if (selectedRating.length > 0) {
    selectedRatingMessage.textContent = `You selected ${selectedRating} out of 5`;
    ratingContainer.classList.add("display-none");
    thankContainer.classList.remove("display-none");
  } else {
    submit.classList.add("disabled");
  }
});

ratingOptions.forEach((option) => {
  option.addEventListener("click", (e) => {
    removeSelectedClass()
    console.log(e.target);
    selectedRating = e.target.textContent;
    e.target.classList.add("selected");
  });
});

function removeSelectedClass() {
  ratingOptions.forEach(option => {
    option.classList.remove("selected");
  })
};
