const { Student } = require("./models");
const { fetchStudents } = require("./database");
const {
  calculateClassAverage,
  findTopStudent,
  filterStudents,
} = require("./analytics");

console.log("Fetching data from database...");

fetchStudents((rawData) => {
  console.log("Data received!\n");

  const students = rawData.map((s) => new Student(s.id, s.name, s.courses));

  console.log("Testing Immutability:");
  console.log(`Original ID: ${students[0].id}`);
  console.log("Attempting to change ID to 999...");
  try {
    students[0].id = 999;
  } catch (err) {}
  if (students[0].id === 1) {
    console.log(`Final ID: ${students[0].id} (Success: ID did not change)`);
  } else {
    console.log(`Final ID: ${students[0].id} (Failure: ID changed!)`);
  }

  console.log("\n--- Analytics Report ---");

  const avg101 = calculateClassAverage(students, 101);
  console.log(`Class Average for Course 101: ${avg101.toFixed(2)}`);

  const top = findTopStudent(students);
  console.log(`Top Student: ${top.name} (Average: ${top.getAverage()})`);

  const in102 = filterStudents(students, (s) =>
    s.courses.some((c) => c.courseId === 102),
  );
  console.log(`Students in Course 102: ${in102.map((s) => s.name).join(", ")}`);
});
