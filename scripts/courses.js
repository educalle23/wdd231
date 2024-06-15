const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: false
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
]



function updateCourses(subjects, numbers) {
    let course = courses.find(c => c.subject === subjects && c.number === numbers);
    if (course) {
        course.completed = true;
    }
}


updateCourses("CSE", 110);
updateCourses("WDD", 130);
updateCourses("CSE", 111);
updateCourses("CSE", 210);
updateCourses("WDD", 131);


//Create a buttons to filter


let courseButton = document.querySelector('.buttons');

let allButton = document.createElement('link');
allButton.textContent = 'ALL';
allButton.className = 'button-1';
allButton.id = 'all';
courseButton.appendChild(allButton);

let cseButton = document.createElement('link');
cseButton.innerHTML = 'CSE';
cseButton.className ='button-1';
cseButton.id = 'css';
courseButton.appendChild(cseButton);

let wddButton = document.createElement('link');
wddButton.textContent = 'WDD';
wddButton.className = 'button-1';
wddButton.id = 'wdd';
courseButton.appendChild(wddButton);


allButton.addEventListener('click', () => filterCourses('all'));
cseButton.addEventListener('click', () => filterCourses('CSE'));
wddButton.addEventListener('click', () => filterCourses('WDD'));

function coursesCard(filteredCourses) {
    const courseSec = document.querySelector('.courses');
    courseSec.innerHTML = '';
    
    filteredCourses.forEach(course => {
    
        let courseSection = document.createElement('section');
        courseSection.className = 'card-1';
        if (course.completed) {
            courseSection.classList.add('completed');
        }

        let courseName = document.createElement('h2');
        courseName.textContent = course.subject + ' ' + course.number

        let courseCredits = document.createElement('h3');
        courseCredits.innerHTML = `<span class="label">Credits: </span>${course.credits}`

        courseSection.appendChild(courseName);
        courseSection.appendChild(courseCredits);

        courseSec.appendChild(courseSection);
       
    });

}

function filterCourses(subject) {
    let filteredCourses;
    if (subject === 'all') {
        filteredCourses = courses;
    } else {
        filteredCourses = courses.filter(course => course.subject === subject);
    }
    coursesCard(filteredCourses);
    displayTotalCredits(filteredCourses);
}


function displayTotalCredits(filteredCourses) {
    const totalCredits = filteredCourses.reduce((total, course) => {
        if (course.completed) {
            return total + course.credits
        } else {
            return total; 
        }
    }, 0);
    const totalCreditsDiv = document.querySelector('.total-credits');
    totalCreditsDiv.textContent = `Total Credits: ${totalCredits}`;
}


filterCourses('all');
