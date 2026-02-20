// Blocking code// Synchronous Programming// Single Threaded Execution//

const apiRequestData1 = (call) => {
    alert("Searching data from the API");
    const apiData = [1, 2, 3, 4];
    console.log("user Received the data");
    return call(apiData);
}

apiRequestData1((mydata) => {
    console.log(mydata);
});

console.log("Loading....");

// Non-Blocking code// ASynchronous Programming// Multiple Threaded Execution//

const apiRequestData2 = (call) => {
    setTimeout(() => {
        alert("Searching data from the API");
        const apiData = [4, 5, 6, 7];
        console.log("user Received the data");
        return call(apiData);

    }, 2000);
}

apiRequestData2((mydata) => {
    console.log(mydata);
});

console.log("Loading....");









