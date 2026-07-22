// Attempted Tasks: Task 1, Task 2, Task 3, Task 4, Task 5, Task 11, Task 12, Task 13, Task 14, Task 15

// 1. Using Math.round()
const rawMarks = 84.6;
const roundedMarks = Math.round(rawMarks);
console.log(`Raw Marks: ${rawMarks} -> Rounded Marks: ${roundedMarks}`);

// 2. Using Math.max()
const marksList = [78, 92, 85, 96, 89];
const highestMarks = Math.max(...marksList);
console.log(`Marks list: [${marksList.join(", ")}] -> Highest Marks: ${highestMarks}`);

// 3. Using Math.random() to generate a random marks value between 0 and 100
const randomRaw = Math.random() * 100;
const randomMarks = Math.round(randomRaw);
console.log(`Generated Random Marks: ${randomRaw.toFixed(2)} -> Rounded: ${randomMarks}`);
