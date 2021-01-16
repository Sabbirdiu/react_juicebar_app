import {
  BrowserRouter as Router,
  Route,
  Switch
  
} from "react-router-dom";
import  About from './pages/About'
import  Details from './pages/Details'
import  Error from './pages/Error'
import  Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path='/details/:id' >
              <Details />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
