// Attempted Tasks: Task 1, Task 2, Task 3, Task 4, Task 5, Task 11, Task 12, Task 13, Task 14, Task 15

// Function that takes student details and returns pass/fail status
function getPassFailStatus(name, marks) {
    const passingMark = 40;
    if (marks >= passingMark) {
        return `${name} has Passed.`;
    } else {
        return `${name} has Failed.`;
    }
}

// Call the function and print the result
const result1 = getPassFailStatus("Bob", 65);
const result2 = getPassFailStatus("Charlie", 35);

console.log("Status for Bob:", result1);
console.log("Status for Charlie:", result2);
