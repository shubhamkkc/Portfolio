export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Emily Johnson',
        position: 'Marketing Director at GreenLeaf',
        img: 'assets/review1.png',
        review:
            'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
    },
    {
        id: 2,
        name: 'Mark Rogers',
        position: 'Founder of TechGear Shop',
        img: 'assets/review2.png',
        review:
            'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
    },
    {
        id: 3,
        name: 'John Dohsas',
        position: 'Project Manager at UrbanTech ',
        img: 'assets/review3.png',
        review:
            'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
    },
    {
        id: 4,
        name: 'Ether Smith',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
    },
];

export const myProjects = [
    {
        title: 'Todo list app',
        desc: 'A simple and responsive Todo List application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). ',
        subdesc:
            'This project was developed as a hands-on learning experience to integrate and apply all the individual technologies I learned into a full-stack application. It features task creation, updating, and deletion, along with real-time syncing between frontend and backend. The app demonstrates effective state management, RESTful API integration, and CRUD operations using MongoDB as the database.\n' +
            '\n',
        href: 'https://github.com/shubhamkkc/Keeper-App',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React',
                path: '/assets/react.png',
            },
            {
                id: 2,
                name: 'Node js',
                path: 'assets/nodejs.png',
            },
            {
                id: 3,
                name: 'CSS',
                path: '/assets/css.png',
            },
            {
                id:4,
                name:'mongo DB',
                path:'/assets/mongo.png'

            }
        ],
    },
    {
        title: 'Flutter Meal App',
        desc: 'The Flutter Meal App is a visually appealing and user-friendly mobile application designed to help users discover and manage their favorite meals from around the world.',
           subdesc:
            'Built using Flutter, the app utilizes the Provider package for efficient and seamless state management.',
            href: 'https://github.com/shubhamkkc/meal_app',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'flutter.js',
                path: '/assets/flutter.png',
            }
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.07 : isMobile ? 0.08 : 0.09,
        deskPosition: isSmall ? [0.5, -6, 0] : isMobile ? [0.5, -7, 0] : isTablet ? [0.5, -8.5, 0] : [0.25, -7.5, 0],
        cubePosition: isSmall ? [4, -9, 0] : isMobile ? [5, -10, 0] : isTablet ? [10, -10, 0] : [15, -9.5, 0],
        reactLogoPosition: isSmall ? [4, 5, 0] : isMobile ? [5, 6, 0] : isTablet ? [8, 5, 0] : [18, 4.8, -7],
        ringPosition: isSmall ? [-7, 8, 0] : isMobile ? [-9, 10, 0] : isTablet ? [-16, 8, 0] : [-35, 8, -12],
        targetPosition: isSmall ? [-6, -14, -10] : isMobile ? [-8, -15, -10] : isTablet ? [-15, -15, -10] : [-18, -12, -3],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Wipro',
        pos: 'Full Stack Developer',
        duration: 'Jan. 2024 - Present',
        title:"  Worked on building a full-stack integration layer for XStore, a retail Point of Sale (POS) system used in physical stores to handle billing, transactions, and inventory updates.",
        icon: '/assets/wipro.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Wipro',
        pos: 'Full Stack Developer',
        duration: 'oct. 2021 - dec.2023 ',
        title: "Developed a Warehouse Picking and packing application that enabled warehouse workers to efficiently navigate, locate products, display item images, and scan barcodes to fulfill orders.",
           icon: '/assets/wipro.png',
        animation: 'clapping',
    }
];

export const userDetail={
    "Name":"Shubham Krishna",
    "Email_id":"shubhamkrishnasound@gmail.com",
    "Mobile_no":"8252744799",
    "Profile_summary":"Full Stack Developer with experience in building scalable web and mobile apps using React, Node.js, Flutter and AWS (Lambda, API Gateway, S3, SQS). Skilled in REST API development, serverless architecture, and cloud deployments. Passionate about writing clean code, solving real-world problems, and delivering user-friendly solutions.",
    "Technologies":["react","nodejs","flutter","aws","postgres","js"],
    "TechStack":"I specialize in JavaScript, React, NodeJs, AWS Lambda, Flutter and Postgres with hands-on experience.",
    "Location":"Kolkata",
    "Country":"India",
    "GithubUrl":"https://github.com/shubhamkkc",
    "Linkdinurl":"www.linkedin.com/in/shubham-krishna-742120174"
}