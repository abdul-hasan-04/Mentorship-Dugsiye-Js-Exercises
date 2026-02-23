async function fetchLocalData() {
    const response = await fetch("./mydata.json");
    const openRespons = await response.json();
    console.log("My local Data : ", openRespons);
}

fetchLocalData()