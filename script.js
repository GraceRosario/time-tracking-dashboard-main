const productivityCardContainer = document.querySelector(
  ".productivity-card-container",
);
const active = document.querySelector('.active')
const filterButton = document.querySelectorAll(".filter");
const userCard = document.querySelector(".user-card");

let timeTracking = [];

async function getData() {
  const response = await fetch("data.json");
  const data = await response.json();

  timeTracking = data;
  console.log(timeTracking);

  makeCard(timeTracking, "daily");

  filterButton.forEach((Button) => {
    Button.addEventListener("click", (e) => {
      Button.classList.add("active");

      let type = Button.dataset.type;
      makeCard(timeTracking, type);

      console.log(type);
    });
  });
}

getData();

function makeCard(data, time) {
  if (timeTracking === null) {
    console.log("data is being loaded");
  }

  productivityCardContainer.innerHTML = data
    .map((item) => {
      return `<article class="productivity-card work">
          <div class="productivity-card__pic border-radius" style="background-color: ${item.color};">
            <img src="${item.svg}" class="svg-img">

            <div class="productivity-card__content border-radius">
              <span class="productivity-card__title">${item.title}</span>
              <svg class="menu-svg">
                <path
                  class="menu"
                  xmlns="http://www.w3.org/2000/svg"
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#bdc1ff"
                  fill-rule="evenodd"
                />
              </svg>
              <span class="productivity-card__current">${item.timeframes[time].current}hrs</span>
              <span class="productivity-card__previous">Last Week - ${item.timeframes[time].previous}hrs</span>
            </div>
          </div>
        </article>`;
    })
    .join("");
}
