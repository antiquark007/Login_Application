Here is the content formatted for direct copy-pasting into `README.md` files:

---

### **Frontend README.md**
```markdown
# React Frontend for Login System

## Overview
This is the frontend of the login system built with React, TypeScript, and Vite. It includes user authentication features such as login and redirection to a dashboard.

## Tech Stack
- **React**: Frontend library
- **TypeScript**: For type safety
- **React Router**: For routing
- **React Query**: For API state management
- **Tailwind CSS**: For styling
- **Vite**: Build tool

## Project Structure
```
src/
├── App.tsx          # Main application component
├── index.css        # Global styles
├── main.tsx         # Entry point
├── components/      # Reusable UI components
├── hooks/           # Custom hooks
├── pages/           # Page components (e.g., LoginForm, Dashboard)
├── schemas/         # Validation schemas
├── types/           # Type definitions
```

## Setup Instructions
1. **Install Dependencies**:
   ```bash
   cd frontend
   npm install
   ```

2. **Run the Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Build**:
   ```bash
   npm run preview
   ```

## Environment Variables
No environment variables are required for the frontend. The backend API is proxied via Vite's configuration.

## How to Use
1. Start the backend server (see backend README).
2. Start the frontend server using `npm run dev`.
3. Open the app in your browser at `http://localhost:5173`.
```

---

### **Backend README.md**
```markdown
# Express Backend for Login System

## Overview
This is the backend of the login system built with Node.js, TypeScript, and Prisma. It provides APIs for user registration and login.

## Tech Stack
- **Node.js**: Backend runtime
- **Express**: Web framework
- **TypeScript**: For type safety
- **Prisma**: ORM for database management
- **PostgreSQL**: Database
- **bcrypt**: For password hashing

## Project Structure
```
src/
├── app.ts           # Express app setup
├── server.ts        # Server entry point
├── controllers/     # Business logic for routes
├── middlewares/     # Middleware (e.g., error handling)
├── routes/          # API route definitions
├── utils/           # Utility functions and classes
```

## Setup Instructions
1. **Install Dependencies**:
   ```bash
   cd backend
   npm install
   ```

2. **Set Up Environment Variables**:
   Create a `.env` file in the `backend` directory with the following content:
   ```
   DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<database_name>"
   PORT=5000
   ```

3. **Run Database Migrations**:
   ```bash
   npx prisma migrate dev
   ```

4. **Start the Development Server**:
   ```bash
   npm run dev
   ```

5. **Build for Production**:
   ```bash
   npm run build
   ```

6. **Start the Production Server**:
   ```bash
   npm start
   ```

## API Endpoints
### **POST /api/users/register**
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "uid": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "id": "number",
      "uid": "string"
    }
  }
  ```

### **POST /api/users/login**
- **Description**: Logs in a user.
- **Request Body**:
  ```json
  {
    "uid": "string",
    "password": "string"
  }
  ```
- **Response**:
  ```json
  {
    "user": {
      "id": "string",
      "uid": "string",
      "name": "string"
    }
  }
  ```

## How to Use
1. Start the backend server using `npm run dev`.
2. Use tools like Postman or cURL to test the API endpoints.
3. Connect the frontend to the backend by starting both servers.
```

You can copy and paste these directly into `README.md` files for the frontend and backend projects.