const createImage = () => {
    let myImage = document.getElementById("image")
    let url = prompt("Enter image url");
    let borderColor = prompt("Enter border color");
    let width = prompt("Enter your image width (PX)");
    let height = prompt("Enter your image height (PX)");
    let radius = prompt("Enter your image border radius in (PX)");
    // and apply this values to change an image//
    myImage.setAttribute("src", url);
    myImage.style.border = `2px solid ${borderColor}`;
    myImage.style.width = `${width}px`;
    myImage.style.height = `${height}px`;
    myImage.style.borderRadius = `${radius}px`;

}