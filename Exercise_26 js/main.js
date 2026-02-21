// Blocking code// Synchronous Programming// Single Threaded Execution//

const apiRequestData1 = (call) => {
    alert("Searching data from the API");
    const apiData1= {id :9, location: "somalia"};
    console.log("user Received the data Immediately");
    return call(apiData1);
}

apiRequestData1((mydata) => {
    console.log(mydata);
});

console.log("Loading....");

// Non-Blocking code// ASynchronous Programming// Multiple Threaded Execution//

const apiRequestData2 = (call) => {
    setTimeout(() => {
        alert("Searching data from the API");
        const apiData2 = {id : 10, location: "Kenya"};
        console.log("user Received the data after 2 seconds.");
        return call(apiData2);

    }, 2000);
}

apiRequestData2((mydata) => {
    console.log(mydata);
});

console.log("Loading....");









