const listElement = document.querySelector("#list");

// function 1 => addItem..

const addItem = () => {
    let newElement = document.createElement("li");
    newElement.textContent = `Do projects`;
    listElement.appendChild(newElement);
}

// function 2 => removeItem..

const removeItem = () => {

    const lastChild = listElement.lastElementChild;
    if(!lastChild){
        alert("No item is exist....");
        return;
    }
    listElement.removeChild(lastChild);

}
