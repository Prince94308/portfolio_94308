# Portfolio Website

A modern, interactive portfolio website built with React, Three.js, and Express.js. Features 3D animations, smooth scrolling, dark/light theme, and a contact form with email functionality.

## 🚀 Features

- **3D Interactive Animations** - Powered by Three.js and React Three Fiber
- **Responsive Design** - Fully responsive across all devices
- **Dark/Light Theme** - Toggle between themes with smooth transitions
- **Smooth Scrolling** - Enhanced user experience with Lenis smooth scrolling
- **Contact Form** - Working contact form with email integration
- **Project Showcase** - Detailed project cards with descriptions
- **Experience Timeline** - Vertical timeline component for work experience
- **Education Section** - Academic background display
- **Certifications** - Showcase of professional certifications
- **Tech Stack Display** - Interactive technology stack visualization

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and dev server
- **Three.js** - 3D graphics library
- **React Three Fiber** - React renderer for Three.js
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

### Backend
- **Express.js** - Web application framework
- **Node.js** - JavaScript runtime
- **Nodemailer** - Email functionality
- **MongoDB/Mongoose** - Database and ODM (optional)

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── client/          # React frontend application
│   │   ├── src/
│   │   │   ├── components/    # React components
│   │   │   ├── assets/        # Images and static files
│   │   │   ├── constants/     # App constants
│   │   │   ├── context/       # React context providers
│   │   │   └── utils/         # Utility functions
│   │   ├── package.json
│   │   └── vite.config.js
│   └── server/          # Express backend server
│       ├── routes/      # API routes
│       ├── index.js     # Server entry point
│       └── package.json
├── .gitignore
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Prince94308/Portfolio.git
cd portfolio
```

2. Install frontend dependencies
```bash
cd public/client
npm install
```

3. Install backend dependencies
```bash
cd ../server
npm install
```

### Running the Application

#### Development Mode

**Frontend:**
```bash
cd public/client
npm run dev
```
The frontend will be available at `http://localhost:5173`

**Backend:**
```bash
cd public/server
npm start
```
The backend will be available at `http://localhost:5000` (or your configured port)

#### Production Build

**Frontend:**
```bash
cd public/client
npm run build
```
The optimized build will be in the `dist/` folder.

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in both `public/client` and `public/server` directories:

**Frontend (.env):**
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

**Backend (.env):**
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
```

## 🎨 Key Components

- **Hero** - Landing section with 3D animations
- **About** - Personal introduction section
- **Experience** - Work experience timeline
- **Education** - Academic background
- **Tech** - Technology stack showcase
- **Works** - Portfolio projects grid
- **Certifications** - Professional certifications
- **Contact** - Contact form with email integration

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Prince Kumar**

- GitHub: [@Prince94308](https://github.com/Prince94308)
- Email: princekumar9162126@gmail.com

## 🙏 Acknowledgments

- Three.js community for excellent 3D graphics library
- React Three Fiber for React integration
- All the open-source libraries that made this project possible

