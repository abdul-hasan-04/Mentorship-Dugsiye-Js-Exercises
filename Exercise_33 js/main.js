let titleElement = document.querySelector("#title");
let bodyElement = document.querySelector(".body");



// function 1 // Add Title

const addTitle = () => {
  const getTitle = prompt("Enter your Title");
  if(getTitle === null || getTitle.trim() === ""){
    titleElement.textContent;
  }else{
    titleElement.textContent = getTitle;
  }
}

// function 2 // Add Body

const addBody = () => {
  const getTitle = prompt("Enter your Title");
  if(getTitle === null || getTitle.trim() === ""){
    bodyElement.textContent;
  }else{
    bodyElement.textContent = getTitle;
  }
}






