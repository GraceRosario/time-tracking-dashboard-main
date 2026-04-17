const productivityCardContainer = document.querySelector(".productivity-card-container");


let timeTracking = [];

// const daily = timeTracking.timeframes.daily;


async function getData() {
    const response = await fetch("data.json");
    const data = await response.json();

    timeTracking = data;
    console.log(timeTracking);

    makeCard(timeTracking, "daily");

}

getData()

function makeCard(data, time) {
    if(timeTracking === null) {
        console.log("data is being loaded");
    }

    productivityCardContainer.innerHTML = data.map(data => { return `<article class="productivity-card work">
          <div class="productivity-card__pic border-radius" style="background-color: ${data.color};">
            <img src="${data.svg}" class="svg-img">

            <div class="productivity-card__content border-radius">
              <span class="productivity-card__title">${data.title}</span>
              <svg class="menu-svg">
                <path
                  class="menu"
                  xmlns="http://www.w3.org/2000/svg"
                  d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
                  fill="#bdc1ff"
                  fill-rule="evenodd"
                />
              </svg>
              <span class="productivity-card__current">${data.timeframes[time].current}hrs</span>
              <span class="productivity-card__previous">Last Week - ${data.timeframes[time].previous}hrs</span>
            </div>
          </div>
        </article>`}).join("");
}

