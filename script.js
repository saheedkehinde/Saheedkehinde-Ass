// cashier.js

// Sample dataset of students
let students = [
  { id: 1, name: "Alice Johnson", grades: [85, 92, 88] },
  { id: 2, name: "Bob Smith", grades: [78, 81, 90] },
  { id: 3, name: "Charlie Brown", grades: [95, 90, 93] },
  { id: 4, name: "David Wilson", grades: [70, 80, 65] }
];

/**
 * Helper function to calculate the average of an array of numbers.
 * @param {number[]} grades - An array of grades.
 * @returns {number} The average grade, rounded to two decimal places.
 */
const calculateAverage = (grades) => {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return parseFloat(average.toFixed(2));
};

/**
 * Task 1: Calculate the average grade for each student.
 * @param {object[]} students - The array of student objects.
 * @returns {object[]} A new array of objects with id, name, and averageGrade.
 */
const calculateAverageGrades = (students) => {
  return students.map(student => {
    const averageGrade = calculateAverage(student.grades);
    return {
      id: student.id,
      name: student.name,
      averageGrade: averageGrade
    };
  });
};

/**
 * Task 2: Find the student with the highest average grade.
 * @param {object[]} students - The array of student objects.
 * @returns {object} The student object with the highest average grade.
 */
const findTopStudent = (students) => {
  const studentsWithAverages = calculateAverageGrades(students);
  
  // Find the student with the maximum average grade
  return studentsWithAverages.reduce((topStudent, currentStudent) => {
    return (currentStudent.averageGrade > topStudent.averageGrade) ? currentStudent : topStudent;
  });
};

/**
 * Task 3: Sort students by their average grade in descending order.
 * @param {object[]} students - The array of student objects.
 * @returns {object[]} A new array of student objects sorted by average grade.
 */
const sortStudentsByGrade = (students) => {
  const studentsWithAverages = calculateAverageGrades(students);

  // Sort the array in descending order based on averageGrade
  return studentsWithAverages.sort((a, b) => b.averageGrade - a.averageGrade);
};


// --- To run and test the functions ---
console.log("--- Calculating Average Grades for Each Student ---");
const studentsWithAverages = calculateAverageGrades(students);
console.log(studentsWithAverages);
// Expected Output:
// [
//   { id: 1, name: 'Alice Johnson', averageGrade: 88.33 },
//   { id: 2, name: 'Bob Smith', averageGrade: 83 },
//   { id: 3, name: 'Charlie Brown', averageGrade: 92.67 },
//   { id: 4, name: 'David Wilson', averageGrade: 71.67 }
// ]

console.log("\n--- Finding the Top Student ---");
const topStudent = findTopStudent(students);
console.log(topStudent);
// Expected Output:
// { id: 3, name: 'Charlie Brown', averageGrade: 92.67 }

console.log("\n--- Sorting Students by Average Grade (Descending) ---");
const sortedStudents = sortStudentsByGrade(students);
console.log(sortedStudents);
// Expected Output:
// [
//   { id: 3, name: 'Charlie Brown', averageGrade: 92.67 },
//   { id: 1, name: 'Alice Johnson', averageGrade: 88.33 },
//   { id: 2, name: 'Bob Smith', averageGrade: 83 },
//   { id: 4, name: 'David Wilson', averageGrade: 71.67 }
// ]
