function calculateClassAverage(students, courseId) {
  const grades = students
    .flatMap((student) => student.courses)
    .filter((course) => course.courseId === courseId)
    .map((course) => course.grade);

  if (grades.length === 0) return 0;
  return grades.reduce((sum, grade) => sum + grade, 0) / grades.length;
}

function findTopStudent(students) {
  if (students.length === 0) return null;
  return students.reduce((best, current) =>
    current.getAverage() > best.getAverage() ? current : best,
  );
}

function filterStudents(students, criteriaFn) {
  const result = [];
  for (const student of students) {
    if (criteriaFn(student) === true) result.push(student);
  }
  return result;
}

module.exports = { calculateClassAverage, findTopStudent, filterStudents };
