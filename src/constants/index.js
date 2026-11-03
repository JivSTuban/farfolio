// Page copy (experience, projects, skills) lives in src/data/profile.js.
// This file keeps only navigation and the 3D hero layout numbers.
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

  // Resume projects first (copy comes from src/data/profile.js), then the older student projects.
  export const myProjects = [
    {
      title: 'AutoApply - Job Application Engine',
      desc: 'AutoApply is a multi-tenant job-application SaaS used by 11 people. It parses resumes, scores fit with a chain of AI models, and submits through Playwright and direct Greenhouse, Ashby, Lever, and micro1 integrations.',
      subdesc:
        'An ATS collector sweeps 60 public job boards (3,186 jobs in one sweep) into an index, so each run scores about 300 listings instead of only the newest 30. 113 commits across backend, frontend, and database repos, with 377 passing tests.',
      href: 'https://www.autonomousapply.com',
      texture: '/textures/project/autoapply.mp4',
      logo: '/assets/autoapply-logo.png',
      logoStyle: {
        backgroundColor: '#1F120A',
        border: '0.2px solid #3A1E0F',
        boxShadow: '0px 0px 60px 0px #FF52004D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        { id: 1, name: 'Node.js', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { id: 2, name: 'Playwright', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/playwright/playwright-original.svg' },
        { id: 3, name: 'Supabase', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { id: 4, name: 'React', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { id: 5, name: 'TypeScript', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      ],
    },
    {
      title: 'weewoo - Encrypted Location Sharing',
      desc: 'weewoo is a self-hostable, Life360-style app for sharing location and chatting with a private circle, where the server stores only ciphertext.',
      subdesc:
        'Argon2id key derivation, libsodium sealed boxes for per-member circle keys, and per-epoch keys so a removed member\'s key opens nothing sent afterwards. 36 row-level-security policies across 9 tables gate who can read a position. 11.7k lines of Dart with 223 passing tests.',
      texture: '/textures/project/weewoo.mp4',
      logo: '/assets/weewoo-logo.png',
      logoStyle: {
        backgroundColor: '#161616',
        border: '0.2px solid #2B2B2B',
        boxShadow: '0px 0px 60px 0px #FFFFFF1F',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
        { id: 1, name: 'Flutter', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg' },
        { id: 2, name: 'Dart', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg' },
        { id: 3, name: 'Supabase', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
      ],
    },
    {
      title: 'Ayahay RAG Knowledge Base SDK',
      desc: 'An open-source TypeScript SDK for document ingestion, vector search, streaming responses, and live-data tools, plus a whitelabel React chat widget. It powers Ayahay\'s multi-tenant chatbots.',
      subdesc: 'Built on OpenAI, PostgreSQL with pgvector, and the Vercel AI SDK. Published as @ayahay/knowledge-base-sdk.',
      href: 'https://github.com/JivSTuban/knowledge-base-sdk',
      cta: 'View on GitHub',
      texture: '/textures/project/ayahay-sdk.mp4',
      logo: '/assets/ayahay_logo.jpeg',
      logoStyle: {
        backgroundColor: '#0E1B2B',
        border: '0.2px solid #17304A',
        boxShadow: '0px 0px 60px 0px #2F8AB54D',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        { id: 1, name: 'TypeScript', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
        { id: 2, name: 'React', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { id: 3, name: 'PostgreSQL', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { id: 4, name: 'Vercel', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
      ],
    },
    {
      title: 'GAssure - Trustless Escrow',
      desc: 'GAssure is a blockchain-backed escrow solution for peer-to-peer and business transactions, built to stop middle-man scams. It won top prize among 196 teams and 980 students at the GCash ImaGnation 2025 hackathon.',
      subdesc:
        'A trustless escrow flow with immutable audit trails, real-time balance tracking, and multi-party transaction handling, built by the CAT5 team with React, Supabase, and Solana.',
      texture: '/textures/project/gassure.mp4',
      logo: '/assets/gassure-logo.svg',
      logoStyle: {
        backgroundColor: '#0A1A3A',
        border: '0.2px solid #10295C',
        boxShadow: '0px 0px 60px 0px #0066FF4D',
      },
      spotlight: '/assets/spotlight4.png',
      tags: [
        { id: 1, name: 'React', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { id: 2, name: 'Supabase', path: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg' },
        { id: 3, name: 'Solana', path: 'https://cdn.simpleicons.org/solana' },
      ],
    },
    {
      title: "TJ's - Human Resource System",
      desc: "TJ's Human Resource System is a comprehensive application designed to streamline HR processes and enhance employee management. Our system aims to provide an efficient and user-friendly interface for both managers and employees.",
      subdesc: 'A comprehensive system built with Django and SQLite, featuring employee management, goal setting, time and attendance tracking, user profile management, leave management, and more. Utilizes HTML, CSS, Bootstrap, JavaScript, and Django-Templates for the frontend, with additional tools like Crispy, Django-Filter, Pillow, and Ruff.',
      href: 'https://jiv.aetherrflare.studio/',
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
      title: 'Mitsu Realm - 2D RPG',
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
      deskScale: isSmall ? 0.05 : isMobile ? 0.6 : isTablet ? 0.7 : 0.9,
      deskPosition: isSmall ? [0, -1, 19] : isMobile ? [0, 1, 21] : isTablet ? [0, 0, 22] : [0, 0, 23],
      ringPosition:
      isSmall
      ? [-7, 4.2, 0]
      : isMobile
      ? [-11, 7.2, 0]
      : isTablet
      ? [-10, 8.2, 0]
      : [-13, 7.2, 0],
      reactPosition: isSmall
        ? [7, 4, 0]
        : isMobile
        ? [11, 7, 0]
        : isTablet
        ? [10, 8, 0]
        : [13, 7, 0],
      targetPosition: isSmall ? [-8, -9.5, -10] : isMobile ? [-9, -7, -10] : isTablet ? [-11, -9, -10] : [-13, -11, -10],
      lazerPosition: isSmall ? [6, -6, 0] : isMobile ? [6.5, -4.5, 0] : isTablet ? [9, -5.5, 0] : [10, -7, 0],
    };
  };
