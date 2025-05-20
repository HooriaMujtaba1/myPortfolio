// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import dj from './assets/tech_logo/dj.png';
import android from './assets/tech_logo/android.png';
import GNS3 from './assets/tech_logo/GNS3.png';
import nextjs from './assets/tech_logo/nextjs.png';

// Experience Section Logo's
import logo from './assets/company_logo/logo.png';
import lb from './assets/company_logo/lb.png';

// Education Section Logo's
import kf from './assets/education_logo/kf.png';
import ics from './assets/education_logo/ics.png';

// Project Section Logo's
import std from './assets/work_logo/std.png';
import ecommerce from './assets/work_logo/ecommerce.png';
import taleforgee from './assets/work_logo/taleforgee.png';
import portfolio from './assets/work_logo/portfolio.png';
import cal from './assets/work_logo/calculator.png';
import club from './assets/work_logo/club.png';

export const SkillsInfo = [{
        title: 'Frontend',
        skills: [
            { name: 'HTML', logo: htmlLogo },
            { name: 'CSS', logo: cssLogo },
            { name: 'JavaScript', logo: javascriptLogo },
            { name: 'React JS', logo: reactjsLogo },
            { name: 'Tailwind CSS', logo: tailwindcssLogo },
            { name: 'Bootstrap', logo: bootstrapLogo },
            { name: 'React Native', logo: reactjsLogo },
            { name: 'Next Js', logo: nextjs },
        ],
    },
    {
        title: 'Backend',
        skills: [
            { name: 'MySQL', logo: mysqlLogo },
            { name: 'Firebase', logo: firebaseLogo },
            { name: 'PostgreSQL', logo: postgreLogo },
            { name: 'Django', logo: dj },
        ],
    },
    {
        title: 'Languages',
        skills: [
            { name: 'C', logo: cLogo },
            { name: 'C++', logo: cppLogo },
            { name: 'Java', logo: javaLogo },
            { name: 'Python', logo: pythonLogo },
            { name: 'JavaScript', logo: javascriptLogo },
        ],
    },
    {
        title: 'Tools',
        skills: [
            { name: 'Git', logo: gitLogo },
            { name: 'GitHub', logo: githubLogo },
            { name: 'VS Code', logo: vscodeLogo },
            { name: 'Android Studio', logo: android },
            { name: 'GNS3', logo: GNS3 },
        ],
    },
];

export const experiences = [{
        id: 0,
        img: lb,
        role: "Fullstack Developer",
        company: "Live Binders",
        date: "April 2024 - Leaved",
        desc: "Developed and maintained web applications using modern technologies. Collaborated with cross-functional teams to deliver high-quality software solutions.",
        skills: [
            "HTML",
            "CSS",
            "JavaScript",
            "Ruby",
            "Java",
        ],
    },
    {
        id: 1,
        img: logo,
        role: "Web Developer",
        company: "Projects",
        date: "January 2024 - March 2025",
        desc: "I create Ecommerce website , Blog site, Calculator and many .other projects for my better skills. ",
        skills: [
            "ReactJS",
            "Django",
            "Python",
            "HTML",
            "CSS",
            "Javascript",
            "Express",
            "Nodejs",
            "MongoDB",
        ],
    },
];

export const education = [{
        id: 0,
        img: kf,
        school: "Khawaja Fareed University, Rahim yar Khan",
        date: "January 2022 - July 2025",
        grade: "3.5 CGPA",
        desc: "I am pursuing a Bachelor of Science in Computer Science (BSCS). My degree focuses on both theoretical and practical aspects of computing. I have studied core subjects like programming, data structures, and algorithms. My coursework also includes databases, web development, and operating systems. I’ve worked on hands-on projects using Python, JavaScript, and modern frameworks.",
        degree: "Bachelors of Scienece in Computer Science - BSCS",
    },
    {
        id: 1,
        img: ics,
        school: "Women College, Khanpur",
        date: "Sept 2019 - Aug 2021",
        grade: "83%",
        desc: "Intermediate in ICS is a two-year pre-university program focused on computer science and foundational subjects. It covers programming, mathematics, and core science courses to build analytical and technical skills. This program prepares students for further studies in computer science, IT, or engineering fields.",
        degree: "Intermediate - I.C.S",
    },
    {
        id: 2,
        img: ics,
        school: "Matriculation, Khanpur",
        date: "Apr 2017 - March 2019",
        grade: "85%",
        desc: "Matric in Science is a secondary school certification with a focus on physics, chemistry, biology, and mathematics. It provides a strong foundation in scientific principles and analytical thinking. This qualification prepares students for higher education in science, engineering, or medical fields.",
        degree: "Matriculation - Matric with Science",
    },
];

export const projects = [{
        id: 0,
        title: "Ecommerce Website",
        description: "A powerful and user-friendly React.js application designed to uncover and showcase detailed clothing products information.",
        image: ecommerce,
        tags: ["React", "Node.js", "Express.js", "MongoDB"],
        github: "https://github.com/HooriaMujtaba1",
        webapp: "https://github.com/HooriaMujtaba1",
    },
    {
        id: 1,
        title: "Story teller Website",
        description: "Story Teller is a Django-based web application that allows users to create, share, and read short stories Users can register, log in, and submit their own original stories through a simple and intuitive interface .The platform categorizes stories by genre, author, and popularity, enhancing discovery and engagement. Admin panel allows content moderation, user management, and story approvals.",
        image: taleforgee,
        tags: ["Python", "Django"],
        github: "https://github.com/HooriaMujtaba1",
        webapp: "https://github.com/HooriaMujtaba1",
    },
    {
        id: 2,
        title: "Responsive Portfolio Website",
        description: "A responsive portfolio website built with React and Bootstrap to showcase projects, skills, and experience.It features smooth navigation, interactive components, and a modern UI optimized for all devices. Designed to highlight personal branding and attract potential employers or clients.",
        image: portfolio,
        tags: ["React JS", "tailwind", "Bootstrap", "HTML", "CSS"],
        github: "https://github.com/HooriaMujtaba1",
        webapp: "https://github.com/HooriaMujtaba1",
    },
    {
        id: 3,
        title: "Student-Management-app",
        description: "A command-line interface (CLI) application for managing student records. This app supports creating, viewing, updating, and deleting student data stored in a JSON file, automatically syncs to a CSV file, features include reading external files and extracting specific columns from CSV files.",
        image: std,
        tags: ["HTML", "CSS", "Python"],
        github: "https://github.com/HooriaMujtaba1",
        webapp: "https://github.com/HooriaMujtaba1",
    },
    {
        id: 4,
        title: "Calculator",
        description: "This project is a fully functional calculator built with HTML, CSS, and JavaScript. It performs basic arithmetic operations like addition, subtraction, multiplication, and division. The interface is responsive and styled with CSS for a clean, user-friendly experience.",
        image: cal,
        tags: ["HTML", "CSS", "Javascript"],
        github: "https://github.com/HooriaMujtaba1",
        webapp: "https://github.com/HooriaMujtaba1",
    },
    {
        id: 5,
        title: "University-Club-Management System",
        description: "This project is a web-based University Club Management System developed using Python and Django. It allows students to join clubs, view upcoming events, and manage their memberships online. Admins can create, update, and delete clubs, assign roles, and track event participation. The system features user authentication, role-based access, and a clean, responsive interface. It streamlines communication and organization within university clubs through a centralized platform.",
        image: club,
        tags: ["HTML", "CSS", "Python", "Django"],
        github: "https://github.com/HooriaMujtaba1",
        webapp: "https://github.com/HooriaMujtaba1",
    },
];