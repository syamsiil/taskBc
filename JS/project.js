let projectCardData = [];

function projectCard(event) {
  event.preventDefault();

  let projectName = document.getElementById("input-name").value;
  let starDate = document.getElementById("input-start-date").value;
  let endDate = document.getElementById("input-end-date").value;
  let description = document.getElementById("input-description").value;
  let image = document.getElementById("input-blog-image").files;

  const reactJsIcon = '<i class="bx bxl-react"></i>';
  const javaScriptIcon = '<i class="bx bxl-javascript"></i>';
  const nodeJsIcon = '<i class="bx bxl-nodejs"></i>';
  const css3Icon = '<i class="bx bxl-css3"></i>';

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

  let previewCard = {
    projectName,
    starDate,
    endDate,
    description,
    image,
    reactJsIcon,
    javaScriptIcon,
    nodeJsIcon,
    css3Icon,
  };

  projectCardData.push(previewCard);
  console.log(projectCardData);

  renderCard();
}

function renderCard() {
  document.getElementById("contents").innerHTML = "";

  for (let index = 0; index < projectCardData.length; index++) {
    document.getElementById("contents").innerHTML += `
    <div class="card-box">
        <img src="${projectCardData[index].image}" alt="" class="card-img" />

        <a href="project-detail.html" class="card-title"
            >${projectCardData[index].projectName}
        </a>
        <span class="card-time">${projectCardData[index].starDate} until ${projectCardData[index].endDate}</span>
        <p class="card-description">
            ${projectCardData[index].description}
        </p>

        <div class="card-app">
            ${projectCardData[index].reactJsIcon}
            ${projectCardData[index].javaScriptIcon}
            ${projectCardData[index].nodeJsIcon}
            ${projectCardData[index].css3Icon}
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
