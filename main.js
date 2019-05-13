"use strict"

//1. CREATE AN ARRAY OF OBJECTS FROM THE TABLE;

const workersDetails = [{
          firstName: "Vanessa",
          lastName: "Rogers",
          Gender: "Female",
          Age: 19,
          Salary: 60193
     },
     {
          firstName: "Charlotte",
          lastName: "Hunt",
          Gender: "Female",
          Age: 24,
          Salary: 92383
     },
     {
          firstName: "Marcus",
          lastName: "Foster",
          Gender: "Male",
          Age: 21,
          Salary: 65760
     },
     {
          firstName: "Myra",
          lastName: "Brooks",
          Gender: "Female",
          Age: 21,
          Salary: 174036
     },
     {
          firstName: "Caroline",
          lastName: "Armstrong",
          Gender: "Female",
          Age: 29,
          Salary: 149879
     },
     {
          firstName: "Belinda",
          lastName: "Carroll",
          Gender: "Female",
          Age: 19,
          Salary: 188935
     },
     {
          firstName: "Olivia",
          lastName: "Armstrong",
          Gender: "Female",
          Age: 26,
          Salary: 34782
     },
     {
          firstName: "April",
          lastName: "Cooper",
          Gender: "Female",
          Age: 20,
          Salary: 68263
     },
     {
          firstName: "Edith",
          lastName: "Harrison",
          Gender: "Female",
          Age: 23,
          Salary: 54709
     },
     {
          firstName: "Vivian",
          lastName: "Henderson",
          Gender: "Female",
          Age: 20,
          Salary: 155709
     },
     {
          firstName: "Ashton",
          lastName: "Martin",
          Gender: "Male",
          Age: 27,
          Salary: 166647
     },
     {
          firstName: "Gianna",
          lastName: "Moore",
          Gender: "Female",
          Age: 23,
          Salary: 191619
     },
     {
          firstName: "Camila",
          lastName: "Allen",
          Gender: "Female",
          Age: 23,
          Salary: 85567
     },
     {
          firstName: "Gianna",
          lastName: "Morrison",
          Gender: "Female",
          Age: 28,
          Salary: 191509
     },
     {
          firstName: "Paul",
          lastName: "Cooper",
          Gender: "Male",
          Age: 28,
          Salary: 39471
     },
     {
          firstName: "Tara",
          lastName: "Mason",
          Gender: "Female",
          Age: 19,
          Salary: 189780
     },
     {
          firstName: "Aida",
          lastName: "Tucker",
          Gender: "Female",
          Age: 21,
          Salary: 143187
     },
     {
          firstName: "Richard",
          lastName: "Cameron",
          Gender: "Male",
          Age: 21,
          Salary: 116644
     },
     {
          firstName: "Amy",
          lastName: "Stewart",
          Gender: "Female",
          Age: 29,
          Salary: 126961
     },
     {
          firstName: "Eleanor",
          lastName: "Thompson",
          Gender: "Female",
          Age: 22,
          Salary: 159003
     },
     {
          firstName: "Alberta",
          lastName: "Edwards",
          Gender: "Female",
          Age: 21,
          Salary: 105648
     },
     {
          firstName: "Gianna",
          lastName: "Evans",
          Gender: "Female",
          Age: 27,
          Salary: 183805
     },
     {
          firstName: "Florrie",
          lastName: "Kelley",
          Gender: "Female",
          Age: 24,
          Salary: 180568
     },
     {
          firstName: "Miranda",
          lastName: "Harris",
          Gender: "Female",
          Age: 19,
          Salary: 185753
     },
     {
          firstName: "Henry",
          lastName: "Davis",
          Gender: "Male",
          Age: 18,
          Salary: 83804
     },
     {
          firstName: "Kirsten",
          lastName: "Barnes",
          Gender: "Female",
          Age: 26,
          Salary: 161833
     },
     {
          firstName: "Jack",
          lastName: "Chapman",
          Gender: "Male",
          Age: 19,
          Salary: 41007
     },
     {
          firstName: "Myra",
          lastName: "Kelly",
          Gender: "Female",
          Age: 27,
          Salary: 118346
     },
     {
          firstName: "Emma",
          lastName: "Evans",
          Gender: "Female",
          Age: 23,
          Salary: 126125
     },
     {
          firstName: "Blake",
          lastName: "Evans",
          Gender: "Male",
          Age: 24,
          Salary: 69702
     },
     {
          firstName: "Aldus",
          lastName: "Armstrong",
          Gender: "Male",
          Age: 26,
          Salary: 132491
     },
     {
          firstName: "Adelaide",
          lastName: "Martin",
          Gender: "Female",
          Age: 20,
          Salary: 175263
     },
     {
          firstName: "Victoria",
          lastName: "Elliott",
          Gender: "Female",
          Age: 21,
          Salary: 111645
     },
     {
          firstName: "Nicole",
          lastName: "Harrison",
          Gender: "Female",
          Age: 22,
          Salary: 54624
     },
     {
          firstName: "Edwin",
          lastName: "Hamilton",
          Gender: "Male",
          Age: 18,
          Salary: 152586
     },
     {
          firstName: "Jessica",
          lastName: "Robinson",
          Gender: "Female",
          Age: 29,
          Salary: 85446
     },
     {
          firstName: "Sofia",
          lastName: "Turner",
          Gender: "Female",
          Age: 20,
          Salary: 131564
     },
     {
          firstName: "Cadie",
          lastName: "Higgins",
          Gender: "Female",
          Age: 21,
          Salary: 138663
     },
     {
          firstName: "Jessica",
          lastName: "Turner",
          Gender: "Female",
          Age: 24,
          Salary: 91319
     },
     {
          firstName: "Walter",
          lastName: "Hamilton",
          Gender: "Male",
          Age: 25,
          Salary: 117408
     },
     {
          firstName: "Alexander",
          lastName: "Farrell",
          Gender: "Male",
          Age: 26,
          Salary: 65878
     },
     {
          firstName: "Justin",
          lastName: "Howard",
          Gender: "Male",
          Age: 21,
          Salary: 165575
     },
     {
          firstName: "Chelsea",
          lastName: "Holmes",
          Gender: "Female",
          Age: "21",
          Salary: "32690"
     },
     {
          firstName: "Alberta",
          lastName: "Wilson",
          Gender: "Female",
          Age: 22,
          Salary: 143459
     },
     {
          firstName: "Miller",
          lastName: "Murphy",
          Gender: "Male",
          Age: 25,
          Salary: 163776
     },
     {
          firstName: "Adrianna",
          lastName: "Hawkins",
          Gender: "Female",
          Age: 29,
          Salary: 64412
     },
     {
          firstName: "Dominik",
          lastName: "Reed",
          Gender: "Male",
          Age: 23,
          Salary: 42643
     },
     {
          firstName: "Gianna",
          lastName: "Craig",
          Gender: "Female",
          Age: 18,
          Salary: 141944
     },
     {
          firstName: "Alissa",
          lastName: "Cameron",
          Gender: "Female",
          Age: 25,
          Salary: 101581
     },
     {
          firstName: "Aldus",
          lastName: "Adams",
          Gender: "Male",
          Age: 28,
          Salary: 132894
     }
]

//2 Use for loop to iterate over the array of objects.....

// 2(a).Print to the console the firstname and lastname of the all workers

workersDetails.forEach(details => {
     console.log(`${details.firstName} ${details.lastName}`);

});

// 2 (b).Print to the console the total salaries of all workers

let averageSalary = 0;
workersDetails.forEach(details => {
     averageSalary += details.Salary;
     averageSalary = averageSalary / 50;
});
console.log(averageSalary)

// 2(c).Print to the console the average age of all workers
let averageAge = 0;
workersDetails.forEach(details => {
     averageAge += details.Age;
     averageAge = averageAge / 50;
});
console.log(averageAge)

// Print to the console the personal info of the worker at index 33
console.log(workersDetails[33]);

// Print to the console the salary of Sofia Turner
workersDetails.forEach(details => {
     if (details.firstName === "Sofia") {
          console.log(`Sofia Turner Salary is: ${details.Salary}`);
     }
});

// Print to the console the length of the array
console.log(`Length of the array is ${workersDetails.length}`)

//Miller Murphy was spelt incorrectly. You are to edit it to Milner Murphy and print to the console the updated array of objects.
workersDetails.forEach(details => {
     if (details.firstName === "Miller" && details.lastName === "Murphy") {
          details.firstName = "Milner";
          //  console.log(details);
     }
     console.log(details);
});

console.log("---------------------------------------------------------------------------------------");

// Aldus Adams’s gender is female. You are to edit it to Female and print to the console the updated array of objects.
workersDetails.forEach(details => {
     if (details.firstName === "Aldus" && details.lastName === "Adams") {
          details.Gender = "Female";
          //    console.log(details);
     }
     console.log(details);
});