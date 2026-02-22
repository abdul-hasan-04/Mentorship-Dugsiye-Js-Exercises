const fetchUserData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const decision = true;
            decision === true ? resolve({name : "Mohamed Ali", id : "BC340012"}) : reject ("Sorry, we cannot find anything");
        },2000)
    })
}

fetchUserData().then((successData) => {
    console.log("Data has been loaded : " , successData);
}).catch((error) => {
    console.log(error);
    
})