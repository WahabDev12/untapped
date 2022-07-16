import './App.css';
import { GlobalStyles } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LandingPage from './components/landingPage';
import Jobs from './components/Jobs';
import Communities from './components/Communities';
import Assessment from './components/Assessment';
import Companies from './components/Companies';
import Profile from './components/Profile';
import Candidate from './components/Candidate';
import Group from './components/GroupTemplate';
import CreateGroup from "./components/createGroup";
import Login from './components/Login';
import SignUp from './components/SignUp';

const App = () => {

  const theme = {

  }

  return (    
    <>  
        <ThemeProvider theme = {theme}>
            <GlobalStyles />
            <Router>  
              <Routes>
                  
                  {/* <Route exact path="/" element={<LandingPage />} /> */}
                  <Route path="/"  element={<Home />} />
                  <Route path="/app/jobs" element={<Jobs />} />
                  <Route path="/app/communities" element={<Communities />} />
                  <Route path="/app/assessment" element={<Assessment />} />
                  <Route path="/app/companies" element={<Companies />} />
                  <Route path="/app/profile" element={<Profile />} />
                  <Route path="/app/candidates" element={<Candidate />} />
                  <Route path="/app/software-engineering" element={<Group />} />
                  <Route  path="/app/create-group" element={<CreateGroup />} />
                  {/* <Route path="/app/login" element={<Login />} />
                  <Route path="/app/signup" element={<SignUp />} /> */}

              </Routes>

            </Router>
         
        </ThemeProvider>

        
    </>
  );
}

export default App;
