const fetchUserData = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const decision = true;
            decision === true ? resolve({name : "Mohamed Ali", id : "BC340012"}) : reject ("Sorry, we cannot find anything");
        },2000)
    })
}


// acces the promise information using async and await//

async function resultFunction() {
     try{
        const userData = await fetchUserData();
        console.log("User Data : ", userData);
    }catch(error){
        console.log(error);
    }
}

resultFunction()
