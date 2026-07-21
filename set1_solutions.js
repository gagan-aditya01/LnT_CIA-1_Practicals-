console.log('Attempted Tasks: Task 1, Task 2, Task 3, Task 4, Task 5, Task 11, Task 12, Task 13, Task 14, Task 15');

// Task 1
console.log('Welcome to the Student Record System!');

// Task 2
let systemName = 'Student Record System';
let totalStudents = 3;
console.log('System Name:', systemName);
console.log('Total Students:', totalStudents);

// Task 3
const studentMarks = 78;
const studentName = 'Aarav';
const isEnrolled = true;
console.log('typeof studentMarks:', typeof studentMarks);
console.log('typeof studentName:', typeof studentName);
console.log('typeof isEnrolled:', typeof isEnrolled);

// Task 4
const marksStudent1 = 84;
const marksStudent2 = 76;
const marksStudent3 = 91;
const averageMarks = (marksStudent1 + marksStudent2 + marksStudent3) / 3;
console.log('Average Marks of 3 students:', averageMarks);

// Task 5
const student = {
  id: 101,
  name: 'Aarav',
  age: 20,
  course: 'Node & Express JS',
  marks: 78,
  admitted: true,
};
console.log('Student ID:', student.id);
console.log('Student Name:', student.name);
console.log('Student Age:', student.age);
console.log('Student Course:', student.course);
console.log('Student Marks:', student.marks);
console.log('Student Admitted:', student.admitted);

// Task 11
function getPassFailStatus(name, rollNumber, marks, passMark) {
  return marks >= passMark ? `${name} (${rollNumber}) - Pass` : `${name} (${rollNumber}) - Fail`;
}
console.log(getPassFailStatus('Aarav', '5A01', 78, 40));

// Task 12
const getPassFailStatusArrow = (name, rollNumber, marks, passMark) =>
  marks >= passMark ? `${name} (${rollNumber}) - Pass` : `${name} (${rollNumber}) - Fail`;
console.log(getPassFailStatusArrow('Meera', '5A02', 35, 40));

// Task 13
console.log(`Student Summary:\nName: ${student.name}\nRoll No: 5A01\nCourse: ${student.course}\nMarks: ${student.marks}`);

// Task 14
const admissionDate = new Date('2026-06-10');
console.log('Admission Date:', admissionDate.toDateString());

// Task 15
const allMarks = [marksStudent1, marksStudent2, marksStudent3, student.marks, 89.6];
console.log('Rounded Marks (89.6):', Math.round(89.6));
console.log('Highest Marks:', Math.max(...allMarks));
console.log('Random Marks Sample (0-99):', Math.floor(Math.random() * 100));
