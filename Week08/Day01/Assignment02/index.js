function lifeInWeeks(age) {
  /************Don't change the code above************/

  //Write your code here.
  let age = prompt("What is your current age?");
  let live = 90 - age;
  let years = live - age;
  let days = years * 365;
  let weeks = years * 52;
  let months = years * 12;
  alert(`You have ${days} days, ${weeks} weeks, and ${months} months left.`);

  /*************Don't change the code below**********/
}
