// Attempted Tasks: Task 1, Task 2, Task 3, Task 4, Task 5, Task 11, Task 12, Task 13, Task 14, Task 15

// Arrow function version of the pass/fail check
const getPassFailStatusArrow = (name, marks) => {
    const passingMark = 40;
    return marks >= passingMark ? `${name} has Passed.` : `${name} has Failed.`;
};

// Call the arrow function with a different set of values
const result1 = getPassFailStatusArrow("Daniel", 82);
const result2 = getPassFailStatusArrow("Eva", 39);

console.log("Status for Daniel:", result1);
console.log("Status for Eva:", result2);
