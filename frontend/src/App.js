import './App.css';
import { GlobalStyles } from './components/styles/Global';
import { ThemeProvider } from 'styled-components';
import Home from './components/Home';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import LandingPage from './components/landingPage';
import State from './components/State';
import Jobs from './components/Jobs';
import Communities from './components/Communities';
import Events from './components/Events';
import Companies from './components/Companies';
import Profile from './components/Profile';

const App = () => {

  const theme = {

  }

  return (    
    <>
        <ThemeProvider theme = {theme}>
            <GlobalStyles />
            <Router>  
              <Routes>

                  <Route exact path="/" element={<LandingPage />} />
                  <Route path="/app/home" element={<Home />} />
                  <Route path="/app/jobs" element={<Jobs />} />
                  <Route path="/app/communities" element={<Communities />} />
                  <Route path="/app/events" element={<Events />} />
                  <Route path="/app/companies" element={<Companies />} />
                  <Route path="/app/profile" element={<Profile />} />
                  
                  {/* <Route path="/jobs" render={() => (<State component={'jobs'}/>)} /> */}
                  {/* <Route path="/candidates" render={() => (<State component={'candidates'}/>)} /> */}

              </Routes>

            </Router>
         
        </ThemeProvider>

        
    </>
  );
}

export default App;
