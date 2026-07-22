// Attempted Tasks: Task 1, Task 2, Task 3, Task 4, Task 5, Task 11, Task 12, Task 13, Task 14, Task 15

// Record admission date (e.g., current date/time or specific date)
const admissionDate = new Date("2026-07-22T09:00:00");
const studentName = "George Harrison";

console.log(`Student Name: ${studentName}`);
console.log(`Admission Date & Time (Raw): ${admissionDate}`);
console.log(`Admission Date (Formatted): ${admissionDate.toDateString()}`);
console.log(`Admission Time (Formatted): ${admissionDate.toLocaleTimeString()}`);
console.log(`ISO String: ${admissionDate.toISOString()}`);
