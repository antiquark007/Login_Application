# Fullstack Login System

## Project Overview
A complete login system with a React frontend and Express backend, designed to provide secure user authentication.

## System Architecture
- **Frontend**: React, TypeScript, Vite
- **Backend**: Node.js, Express, TypeScript, Prisma
- **Database**: PostgreSQL

## Repository Structure
```
login-system/
├── frontend/        # React TypeScript frontend
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── hooks/
│   │   └── utils/
│   ├── package.json
│   └── README.md
└── backend/         # Express TypeScript backend
    ├── src/
    │   ├── controllers/
    │   ├── routes/
    │   ├── middlewares/
    │   └── utils/
    ├── package.json
    └── README.md
```

## Prerequisites
- Node.js (v18+)
- npm (v9+)
- PostgreSQL (v13+)

## Global Setup
1. Clone the repository
2. Install root-level dependencies (optional)
```bash
git clone https://github.com/yourusername/login-system.git
cd login-system
```

## Frontend Setup

### Tech Stack
- React
- TypeScript
- Vite
- React Router
- React Query
- Tailwind CSS

### Installation
```bash
cd frontend
npm install
```

### Running the Frontend
```bash
# Development server
npm run dev

# Production build
npm run build
npm run preview
```

## Backend Setup

### Tech Stack
- Node.js
- Express
- TypeScript
- Prisma
- PostgreSQL
- bcrypt

### Database Configuration
1. Create a PostgreSQL database
2. Create `.env` file in `backend/` directory
```bash
DATABASE_URL="postgresql://username:password@localhost:5432/logindb"
PORT=5000
JWT_SECRET=your_secure_secret_key
```

### Installation
```bash
cd backend
npm install

# Run database migrations
npx prisma migrate dev --name init
```

### Running the Backend
```bash
# Development server
npm run dev

# Production build
npm run build
npm start
```

## API Endpoints

### User Registration
- **URL**: `/api/users/register`
- **Method**: `POST`
- **Request Body**:
```json
{
  "uid": "username",
  "password": "securepassword"
}
```

### User Login
- **URL**: `/api/users/login`
- **Method**: `POST`
- **Request Body**:
```json
{
  "uid": "username",
  "password": "securepassword"
}
```

## Development Workflow
1. Start PostgreSQL
2. Start backend server (`backend/: npm run dev`)
3. Start frontend server (`frontend/: npm run dev`)
4. Access application at `http://localhost:5173`

## Security Features
- Password hashing
- Input validation
- Error handling middleware

## Recommended Tools
- Postman (API testing)
- VSCode (Development)
- pgAdmin (Database management)

## Troubleshooting
- Ensure all environment variables are set
- Check database connection
- Verify dependency versions
- Review server logs for detailed errors
