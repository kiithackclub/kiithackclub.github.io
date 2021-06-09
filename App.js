import './App.css';
import Landing from './components/Landing/Landing';
import Navbar from './components/Navbar/Navbar';
import Philosophy from './components/Philosophy/Philosophy'
import Perks from './components/Perks/Perks'
import NextSteps from './components/NextSteps/Nextsteps'
import Footer from './components/Footer/Footer'
import '@hackclub/theme/fonts/reg-bold.css';
import Teams from './pages/Teams/Teams';
import Member from './pages/Member/Member';

import {
  Switch,
  Route,
} from "react-router-dom";
import Upcoming from './pages/Upcoming/Upcoming';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        {/* <Route path='/team'>
          <Teams />
          <Footer />
        </Route> */}
        {/* <Route path='/membership'>
          <Member />
          <Footer />
        </Route> */}
        <Route path='/comingSoon'>
          <Upcoming />
        </Route>
        <Route path='/'>
          <Landing />
          <Philosophy />
          <Perks />
          <NextSteps />
          <Footer />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
