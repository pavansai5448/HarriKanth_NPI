
import Header from "./Components/Header"
import Login from "./Components/Login";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Observation from "./Components/Observation";
import Landing from "./Components/Landing";
import Tinting from "./Components/Tinting-Banco";

function App() {
  return (
    <Router>
      <>
      {/* <div className="App"> */}
        <Header />
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/Observation">
            <Observation />
          </Route>
          <Route exact path="/Landing">
            <Landing/>
          </Route>
          <Route exact path="/Tinting-Banco">
            <Tinting />
          </Route>
        </Switch>

      </>
    </Router>
  );
}

export default App;