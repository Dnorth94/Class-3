function learntodrive(student = 'someone') {
    console.log(`${student} became a driver by riding with drivers ed`);
}
function learntodrive(student = "someone", language = "to drive") {
  if (language.toLowerCase() === "driving") {
    console.log("Are you learning to drive?");
  } else {
    console.log("Have you tried drivers ed?");
  }
  console.log(`${student} became a driver by learning ${language}!`);
}