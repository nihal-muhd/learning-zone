
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login';
import { ProtectedRoute } from './routes/ProtectedRoute';
import Dashboard from './pages/Dashboard';
import { PublicRoute } from './routes/PublicRoute';
import DashboardLayout from './Layout/DashboardLayout';

function App() {
  return (
    <Routes>
      <Route element={<PublicRoute />}>
        <Route path='/login' element={<Login />} />

      </Route>
      <Route element={<ProtectedRoute />}>
        <Route element={<DashboardLayout />}>

          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/' element={<Dashboard />} />
        </Route>
      </Route>
    </Routes>
  )
}

export default App