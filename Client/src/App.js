import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap"
import RegistrationForm from './Components/RegistrationForm';
import LoginForm from './Components/LoginForm';
import UserList from './Components/UserList';
import VerifyAccount from './Components/VerifyAccount';


function App() {
  return (
    <div>
      <Router>
        <Navbar className="Re-Navbar">
          <Navbar.Brand className="Re-brand">Project 1</Navbar.Brand>
        </Navbar>
        <Routes>
          <Route path='/' element={<RegistrationForm />} />
          <Route path='/login' element={<LoginForm />} />
          <Route path='/verify' element={<VerifyAccount />} />
          <Route path='/userlist' element={<UserList />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
