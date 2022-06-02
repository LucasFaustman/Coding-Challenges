// Create a function finalGrade, which calculates the final grade of a student depending on two parameters: a grade for the exam and a number of completed projects.

// This function should take two arguments: exam - grade for exam (from 0 to 100); projects - number of completed projects (from 0 and above);

// This function should return a number (final grade). There are four types of final grades:

// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade (exam, projects) {
    //   Use a few conditionals with && statements baked inside
      
      if (exam > 90 || projects > 10) {
        return 100
      } else if (exam > 75 && projects >= 5) {
        return 90
      } else if (exam > 50 && projects >= 2) {
        return 75
      } else
        return 0
    }
    
    // P: 2 parameters, exam and projects. Exam will be integer between 0 and 100, project the same
    // R: Return an integer. 100 if exam is more than 90 OR completed projects bigger than 10
    // 90 if exam is bigger than 75 and completed projects is minimum 5
    // 75 if grade is more than 50 and completed projects is greater or equal to 2
    // 0 else
    // E: 50, 3 => 75