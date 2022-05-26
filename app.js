const age = parseInt(prompt("How Old Are You?"));

if (isNaN(age) || age < 0) {
  console.log("please input the positive number");
} else if (age < 20) {
  console.log("You are too young");
} else if (age < 60) {
  console.log("You are my friends");
} else if (age < 80) {
  console.log("you are a little bit old");
} else if (age > 80) {
  console.log("You are so old");
}
