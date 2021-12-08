import './App.css';
//import styled from "styled-components";

import Account from './Component/Pages/Account/Account';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path = "/acc" component = {Account}/>
        </Switch>
      </Router>
    </div>
  );
}

// const Container = styled.div`
// display:flex;
// justify-content:center;
// align-items:center;
// height:100vh;`;
// const Card = styled.div``;
export default App;
