async function getUsersData() {
    try{
        const request = await fetch("https://jsonplaceholder.typicode.com/users");

        if(!request.ok){
           throw new Error(`${request.status}, - Resource not found!`);
        }

        const usersData = await request.json();
        console.log(usersData);
        

    }catch(error){
        console.log(error);
        
    }
}

getUsersData()