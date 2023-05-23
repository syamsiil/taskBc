let projectCardData = [];

function projectCard(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-name").value;
  let startDate = new Date(document.getElementById("input-start-date").value);
  let endDate = new Date(document.getElementById("input-end-date").value);
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-blog-image").files;

  // alert if endDate>today
  let today = new Date().toISOString().split("T")[0];
  if (endDate > today) {
    return alert("No time travel here!");
  }

  const reactJsIcon = '<i class="bx bxl-react"></i>';
  const javaScriptIcon = '<i class="bx bxl-javascript"></i>';
  const nodeJsIcon = '<i class="bx bxl-nodejs"></i>';
  const css3Icon = '<i class="bx bxl-css3"></i>';

  // alert if no one choose the technologies
  let multiInput = document.querySelectorAll(".multi-input:checked");
  if (multiInput.length === 0) {
    return alert("Select at least one technology use!");
  }

  let reactJsIconDecide = document.getElementById("react-js").checked
    ? reactJsIcon
    : "";
  let javaScriptIconDecide = document.getElementById("javascript").checked
    ? javaScriptIcon
    : "";
  let nodeJsIconDecide = document.getElementById("node-js").checked
    ? nodeJsIcon
    : "";
  let css3IconDecide = document.getElementById("css3").checked ? css3Icon : "";

  image = URL.createObjectURL(image[0]);
  console.log(image);

  // alert if the  value startdate>enddate
  const sDvalidation = new Date(startDate);
  const eDvalidation = new Date(endDate);
  if (sDvalidation > eDvalidation) {
    return alert("Input your dates correctly!");
  }

  let previewCard = {
    projectName,
    startDate,
    endDate,
    description,
    image,
    reactJsIconDecide,
    javaScriptIconDecide,
    nodeJsIconDecide,
    css3IconDecide,
    postAt: new Date(),
    author: "Seeus",
  };

  projectCardData.push(previewCard);
  console.log(projectCardData);

  renderCard();

  // reset/clear the input field after submit
  document.getElementById("input-name").value = "";
  document.getElementById("input-start-date").value = "";
  document.getElementById("input-end-date").value = "";
  document.getElementById("input-description").value = "";
  document.getElementById("react-js").checked = false;
  document.getElementById("javascript").checked = false;
  document.getElementById("node-js").checked = false;
  document.getElementById("css3").checked = false;
  document.getElementById("input-blog-image").value = "";

  // document.getElementById("project-form").reset();
}

function renderCard() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < projectCardData.length; index++) {
    const startDate = new Date(projectCardData[index].startDate);
    // console.log(startDate);
    const endDate = new Date(projectCardData[index].endDate);
    // console.log(endDate);
    const differenceTime = endDate - startDate;
    const timeUnits = [
      { value: 365.25 * 24 * 60 * 60 * 1000, label: "years" },
      { value: 30 * 24 * 60 * 60 * 1000, label: "months" },
      { value: 7 * 24 * 60 * 60 * 1000, label: "weeks" },
      { value: 24 * 60 * 60 * 1000, label: "days" },
    ];

    let distanceTime = "";
    for (let calculation = 0; calculation < timeUnits.length; calculation++) {
      const { value, label } = timeUnits[calculation];
      const calculate = Math.floor(differenceTime / value);
      if (calculate > 0) {
        distanceTime = `${calculate} ${label}`;
        break;
      }
    }

    if (distanceTime === "") {
      distanceTime = "today";
    }

    document.getElementById("contents").innerHTML += `
        <div class="card-box">
            <img src="${
              projectCardData[index].image
            }" alt="" class="card-img" />

            <a href="project-detail.html" class="card-title"
                >${projectCardData[index].projectName}
            </a>

            <div class="card-time">${getFullTime(
              projectCardData[index].postAt
            )} </div>
            
            <p class="distance-time" style="font-size:12px; color:#b1afaf">${distanceTime}</p>

                                   
           <p class="card-description">
                ${projectCardData[index].description}
            </p>

            <div class="card-app">
                ${projectCardData[index].reactJsIconDecide}
                ${projectCardData[index].javaScriptIconDecide}
                ${projectCardData[index].nodeJsIconDecide}
                ${projectCardData[index].css3IconDecide}
            </div>
         
            <div class="card-btn">
                <div class="card-btn-detail">
                    <button type="button" id="edit-card-button">Edit</button>
                </div>
                <div class="card-btn-detail">
                    <button type="button" id="delete-card-button">Delete</button>
                </div>
            </div>
        </div>
    `;
  }
}

function getFullTime(time) {
  // console.log("get full time");
  // let time = new Date();
  // console.log(time);

  let monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  // console.log(monthName[8]);

  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthIndex);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();
  // console.log(minutes);

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }

  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

// function getDistanceTime(time) {
//   let timeNow = new Date();
//   let timePost = time;

//   // waktu sekarang - waktu post
//   let distance = timeNow - timePost; // hasilnya milidetik
//   console.log(distance);

//   let milisecond = 1000; // milisecond
//   let secondInHours = 3600; // 1 jam 3600 detik
//   let hoursInDays = 24; // 1 hari 24 jam

//   let distanceDay = Math.floor(
//     distance / (milisecond * secondInHours * hoursInDays)
//   ); // 1/86400000
//   let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
//   let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
//   let distanceSeconds = Math.floor(distance / milisecond); // 1/1000

//   if (distanceDay > 0) {
//     return `${distanceDay} Day Ago`;
//   } else if (distanceHours > 0) {
//     return `${distanceHours} Hours Ago`;
//   } else if (distanceMinutes > 0) {
//     return `${distanceMinutes} Minutes Ago`;
//   } else {
//     return `${distanceSeconds} Seconds Ago`;
//   }
// }

// setInterval(function () {
//   renderCard();
// }, 2000);
