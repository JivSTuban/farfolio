# Jiv Tuban's Portfolio

Welcome to my portfolio! This project showcases my skills, projects, and experience as a web developer. The portfolio is built using modern web technologies and includes interactive elements to provide a dynamic user experience.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Responsive Design:** The portfolio is fully responsive and works on all devices.
- **Interactive Elements:** Includes interactive 3D models and animations.
- **Project Showcase:** Displays a selection of my projects with detailed descriptions and links.
- **Contact Form:** Allows visitors to send me messages directly from the site.
- **Download CV:** Visitors can download my CV directly from the site.

## Technologies Used

- **React:** JavaScript library for building user interfaces.
- **Three.js:** JavaScript library for creating 3D graphics.
- **GSAP:** JavaScript library for animations.
- **Tailwind CSS:** Utility-first CSS framework for styling.
- **EmailJS:** Service for sending emails directly from the client-side.
- **React-Scroll:** Library for smooth scrolling navigation.
- **React-Responsive:** Library for media query hooks in React.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/JivSTuban/portfolio.git
   cd portfolio
    ```
2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a .env file in the root directory and add your EmailJS credentials:
    ```bash
    VITE_APP_EMAILJS_SERVICE_ID=your_service_id
    VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
    VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
    ```
4. **Run the development server:**

    ```bash
    npm run dev
    ```
    The app will be available at http://localhost:3000.

## Usage
#### Navigate: 
Use the navigation bar to explore different sections of the portfolio.
#### View Projects: 
Click on "Check Project" to view more details about each project.
#### Contact: 
Use the contact form to send me a message.
#### Download CV: 
Click the "Download CV" button to download my CV.

## Project Structure
```bash
src/
├── assets/                 # Images and other assets
├── components/             # Reusable components
│   ├── Alert.jsx
│   ├── Button.jsx
│   ├── CanvasLoader.jsx
│   ├── Computer.jsx
│   ├── DemoComputer.jsx
│   ├── Lazer.jsx
│   ├── Midoriya.jsx
│   ├── Pikachu.jsx
│   ├── ReactLogo.jsx
│   ├── Target.jsx
│   └── Labubu.jsx
├── constants/              # Constants and configuration
│   └── index.js
├── hooks/                  # Custom hooks
│   └── useAlert.js
├── sections/               # Main sections of the portfolio
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   ├── Hero.jsx
│   ├── Navbar.jsx
│   └── Projects.jsx
├── App.jsx                 # Main app component
├── index.css               # Global styles
└── main.jsx                # Entry point
```
## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to create an issue or submit a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.