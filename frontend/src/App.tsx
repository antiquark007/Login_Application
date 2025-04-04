import { Routes, Route, } from 'react-router-dom';
import LoginForm from './pages/LoginForm';
import Dashboard from './pages/Dashboard';


function App() {
  return (
    <Routes>
      <Route path="*" element={<LoginForm />} />
      <Route path="/dashboard" element={<Dashboard/>} />
    </Routes>
  );
}

export default App;