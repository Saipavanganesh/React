import logo from './logo.svg';
import './App.css';
import SignupForm from './pages/signup/signup';
import LoginForm from './pages/login/login';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/login" element={<LoginForm />}>
            
          </Route>
          <Route exact path="/signup" element={<SignupForm />}>
            
          </Route>
        </Routes>
    </Router >
  );
}

export default App;
