
const students = {
    Rahul: 80,
    Avanish: 77,
    Divya: 88,
    Kamala: 95,
    Liz: 68
};


function getGrade(marks) {
    if (marks < 60) {
        return 'F';
    } else if (marks < 70) {
        return 'D';
    } else if (marks < 80) {
        return 'C';
    } else if (marks < 90) {
        return 'B';
    } else {
        return 'A';
    }
}


function displayStudentData() {
    const tableBody = document.getElementById('studentTableBody');
    let totalMarks = 0;
    let studentCount = 0;

    
    for (let student in students) {
        const marks = students[student];
        const grade = getGrade(marks);
        
       
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td>${student}</td>
            <td>${marks}</td>
            <td>${grade}</td>
        `;
        
        
        tableBody.appendChild(row);
        
        
        totalMarks += marks;
        studentCount++;
    }

    
    const averageMarks = totalMarks / studentCount;
    document.getElementById('averageMarks').textContent = averageMarks.toFixed(2);
}


window.onload = displayStudentData;
