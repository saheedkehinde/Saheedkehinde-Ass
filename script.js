// cashier.js

// Sample dataset of students
let students = [
  { id: 1, name: "Alice Johnson", grades: [85, 92, 88] },
  { id: 2, name: "Bob Smith", grades: [78, 81, 90] },
  { id: 3, name: "Charlie Brown", grades: [95, 90, 93] },
  { id: 4, name: "David Wilson", grades: [70, 80, 65] }
];


const calculateAverage = (grades) => {
  const sum = grades.reduce((total, grade) => total + grade, 0);
  const average = sum / grades.length;
  return parseFloat(average.toFixed(2));
};


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

const findTopStudent = (students) => {
  const studentsWithAverages = calculateAverageGrades(students);
  
  // Find the student with the -Top or maximum average grade
  return studentsWithAverages.reduce((topStudent, currentStudent) => {
    return (currentStudent.averageGrade > topStudent.averageGrade) ? currentStudent : topStudent;
  });
};


const sortStudentsByGrade = (students) => {
  const studentsWithAverages = calculateAverageGrades(students);

  // Sort the array in descending order based on averageGrade
  return studentsWithAverages.sort((a, b) => b.averageGrade - a.averageGrade);
};

