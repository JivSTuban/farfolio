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
  
  export const myProjects = [
    {
      title: "TJ's - Human Resource System",
      desc: "TJ's Human Resource System is a comprehensive application designed to streamline HR processes and enhance employee management. Our system aims to provide an efficient and user-friendly interface for both managers and employees.",
      subdesc: 'A comprehensive system built with Django and SQLite, featuring employee management, goal setting, time and attendance tracking, user profile management, leave management, and more. Utilizes HTML, CSS, Bootstrap, JavaScript, and Django-Templates for the frontend, with additional tools like Crispy, Django-Filter, Pillow, and Ruff.',  href: 'https://github.com/JivSTuban/TJ-Human-Resource',
      texture: '/textures/project/project1.mp4',
      logo: '/assets/TJ_logo.png',
      logoStyle: {
        backgroundColor: '#1C1A43',
        border: '0.2px solid #252262',
        boxShadow: '0px 0px 60px 0px #635BFF4D',
      },
      spotlight: '/assets/spotlight5.png',
      tags: [
        {
          id: 1,
          name: 'HTML',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
        },
        {
          id: 2,
          name: 'BootStrap',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg',
        },
        {
          id: 3,
          name: 'JavaScript',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
        },
        {
          id: 4,
          name: 'Django',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg',
        },
        {
          id: 5,
          name: 'SQLite',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
        },
        
      ],
    },
    {
      title: 'JivGPT - Chat GPT Clone',
      desc: 'The JivGPT is a web application that leverages the power of OpenAI\'s GPT-3.5 architecture to provide users with an interactive and conversational experience. This project offers a seamless platform for users to engage in natural language conversations with an AI chatbot, JivGPT, which is capable of understanding and generating human-like text based on user input.',
      subdesc:
        'JivGPT offers a versatile AI assistant with a user-friendly interface and real-time chat. It is built with React, CSS, HTML, Vite, and Axios, and is hosted on Netlify.',
      href: 'https://jivgpt.netlify.app/?fbclid=IwAR0MKRaeyEArAbbIqWSBl44RmShOZ3ckfwi5KNgE7Lipnc_RYzMtTe5g9Ms',
      texture: '/textures/project/project2.mp4',
      logo: 'https://raw.githubusercontent.com/JivSTuban/JivGPT/8ac808273986830c263f512237f60ee22b54298b/src/assets/chatgpt.svg',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'CSS',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg',
        },
        {
          id: 3,
          name: 'HTML',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg',
        },
        {
          id: 4,
          name: 'Vite',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
        },
        {
          id: 5,
          name: 'Axios',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg',
        },
      ],
    },
    {
      title: 'Fesbok - Social Media',
      desc: 'This application utilizes a backend built with PHP Laravel Framework, leveraging the efficiency and simplicity of SQLite as its database solution. Laravel brings a suite of features tailored to modern web development, including Eloquent ORM, Routing, Middleware, and Blade Templating.',
      subdesc: 'On the frontend, the application employs Livewire in conjunction with Alpine.js to deliver a dynamic and interactive user experience. The application type is akin to a Facebook-like platform, encompassing key features such as User Authentication, Profiles, and Posts.',
      href: 'https://github.com/JivSTuban/Fesbok',
      texture: '/textures/project/project3.mp4',
      logo: '/assets/fesbok.png',
      logoStyle: {
        backgroundColor: '#2A1816',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'Laravel',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
        },
        {
          id: 2,
          name: 'Livewire',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/livewire/livewire-original.svg',
        },
        {
          id: 3,
          name: 'Alpine.js',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/alpinejs/alpinejs-original.svg',
        },
        {
          id: 4,
          name: 'Composer',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/composer/composer-original.svg',
        },
        {
          id: 5,
          name: 'SQLite',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
        },
      ],
    },
    {
      title: 'GameStore - Game Detail Management', 
      desc: 'GameStore is composed to two microservices: a frontend Blazor app and a backend API built with ASP.NET Core. The project is designed to provide a platform for managing game details, including user authentication, and game creation.',
      subdesc: 'The project practices clean architecture and microservices, ensuring a modular and maintainable codebase. The frontend Blazor app interacts seamlessly with the backend API, providing a smooth user experience for managing game details. The GameStore API includes endpoints for managing games, users, and authentication, leveraging Entity Framework and Identity Framework for secure and efficient data handling.',
      href: 'https://github.com/JivSTuban/GameStore-Frontend',
      texture: '/textures/project/project4.mp4',
      logo: '/assets/game-controller.svg',
      logoStyle: {
        backgroundColor: '#0E1F38',
        border: '0.2px solid #0E2D58',
        boxShadow: '0px 0px 60px 0px #2F67B64D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        {
          id: 1,
          name: 'Blazor',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blazor/blazor-original.svg',
        },
        {
          id: 2,
          name: 'ASP.NET',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg',
        },
        {
          id: 3,
          name: 'C#',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
        },
        {
          id: 4,
          name: 'JavaScript',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-plain.svg',
        },
        {
          id: 5,
          name: 'SQLite',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg',
        },
      ],
    },
    {
      title: 'Mitsu Realm - a 2D RPG',
      desc: 'Mitsu Realm is a 2D java game that we created as our final project for our Object Oriented Programming class.',
      subdesc: 'Mitsu Realm was a crude and hard-coded project, but it was through this experience that I learned a lot about Object-Oriented Programming (OOP). The project involved creating game mechanics, character interactions, and a basic game loop, all while applying OOP principles such as encapsulation, inheritance, and polymorphism. Despite its simplicity, Mitsu Realm was a valuable learning experience that laid the foundation for my understanding of OOP.',
      href: 'https://github.com/JivSTuban/Mitsu-Realm',
      texture: '/textures/project/project5.mp4',
      logo: '/assets/robot-face-svgrepo-com.svg',
      logoStyle: {
        backgroundColor: '#60f5a1',
        background:
          'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      
      
      tags: [
        {
          id: 1,
          name: 'Java',
          path: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
        },
        {
          id: 2,
          name: 'Piskel',
          path: 'https://avatars.githubusercontent.com/u/28667131?v=4',
        },
      ],
    },
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.06 : isMobile ? 0.8 : 0.9,
      deskPosition: isSmall ? [0, -1, 19] : isMobile ? [0, -1, 21] : [0, -1, 23],
      cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
      ringPosition:   
      isSmall 
      ? [-5, 4.2, 0] 
      : isMobile 
      ? [-9, 4.2, 0] 
      : isTablet 
      ? [-10, 4.2, 0] 
      : [-12, 5.2, 0],
      reactPosition: isSmall 
        ? [5, 4, 0] 
        : isMobile 
        ? [9, 4, 0] 
        : isTablet 
        ? [10, 4, 0] 
        : [12, 5, 0],
      targetPosition: isSmall ? [-7, -9, -10] : isMobile ? [-9, -11, -10] : isTablet ? [-11, -13, -10] : [-13, -13, -10],
      lazerPosition: isSmall ? [5, -6, 0] : isMobile ? [6.5, -7, 0] : isTablet ? [9, -9, 0] : [10, -9, 0],
    };
  };
