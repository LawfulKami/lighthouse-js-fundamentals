const temperature = ""; /* empty strings seems to evaluate somewhere
between 0 and 1 */
if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 1) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");