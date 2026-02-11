// create loop that keeps asking the user to enter the porompt number that is greater than 10//

 var userAsk;

do{
  userAsk= prompt("Enter A number that is greater than 10");
}while(userAsk < 10);

console.log(userAsk + ": " + "Yess you Entered Valid number");
