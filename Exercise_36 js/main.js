const colorInput = document.querySelector("#colorInput");
const colorDisplay = document.getElementById("colorDisplay");
const historyContainer = document.querySelector(".history");
const clearBtn = document.querySelector("button");


const displayColor = () => {
    const choosedColor = colorInput.value;
    colorDisplay.style.backgroundColor = choosedColor;
    // create paragraph textContent = choosed color, and color = choosed color//
    const newElement = document.createElement("p");
    newElement.className = "history-para"
    newElement.style.color = choosedColor;
    newElement.textContent = choosedColor;
    historyContainer.append(newElement);
}

const clearHistory = () => {
    let lastChild = historyContainer.lastChild;
    if(lastChild){
        historyContainer.remove();
        alert("all history are deleted.");
    }else{
        alert("color history is empty.");
    }
}
colorInput.addEventListener("change", (e) => {
    e.preventDefault();
    displayColor();
})

clearBtn.addEventListener("click", () => {
    clearHistory();
})
