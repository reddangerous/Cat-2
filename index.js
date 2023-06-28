// Function to handle the click event
function handleButtonClick() {
  try {
    // Get the input values
    var assignment1Marks = getMarks('Assignment 1');
    var assignment2Marks = getMarks('Assignment 2');
    var finalExamMarks = getMarks('Final Exam');

    // Process the marks
    // ...

    // Display success message
    console.log('Marks entered successfully!');

    // Display the marks in a table
    displayMarksTable(assignment1Marks, assignment2Marks, finalExamMarks);
  } catch (error) {
    // Display error message
    console.error('Error:', error);
  }
}

// Helper function to get marks for a specific assessment
function getMarks(assessmentName) {
  var marks = [];

  for (var i = 1; i <= 2; i++) {
    var input = prompt(`Enter ${assessmentName} marks for student ${i}:`);

    // Validate the input
    if (input === null || input.trim() === '') {
      throw new Error(`Please enter valid marks for student ${i}.`);
    }

    var mark = parseFloat(input);

    if (isNaN(mark) || mark < 0 || mark > 100) {
      throw new Error(`Invalid ${assessmentName} marks for student ${i}.`);
    }

    marks.push(mark);
  }

  return marks;
}

// Function to display marks in a table
function displayMarksTable(assignment1Marks, assignment2Marks, finalExamMarks) {
  var tableBody = document.getElementById('marks-table').getElementsByTagName('tbody')[0];
  tableBody.innerHTML = '';

  for (var i = 0; i < 2; i++) {
    var row = document.createElement('tr');

    var studentCell = document.createElement('td');
    studentCell.textContent = 'Student ' + (i + 1);
    row.appendChild(studentCell);

    var assignment1Cell = document.createElement('td');
    assignment1Cell.textContent = assignment1Marks[i];
    row.appendChild(assignment1Cell);

    var assignment2Cell = document.createElement('td');
    assignment2Cell.textContent = assignment2Marks[i];
    row.appendChild(assignment2Cell);

    var finalExamCell = document.createElement('td');
    finalExamCell.textContent = finalExamMarks[i];
    row.appendChild(finalExamCell);

    var totalMarksCell = document.createElement('td');
    var totalMarks = (assignment1Marks[i] + assignment2Marks[i] + finalExamMarks[i]) / 3;
    totalMarksCell.textContent = totalMarks.toFixed(2); // Displaying total marks with 2 decimal places
    row.appendChild(totalMarksCell);


    tableBody.appendChild(row);
  }
}

// Add event listener to the button
document.getElementById('my-button').addEventListener('click', handleButtonClick);