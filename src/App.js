import "./App.scss";
import Footer from "./components/footer/Footer";
import FindMatch from "./components/matches/FindMatch";
import Form from "./components/form/Form";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { useState } from "react";

function App() {
  const [matchResults, setMatchResults] = useState([]);

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/form" />
        </Route>
        <Route
          path="/form"
          exact
          render={(renderProps) => (
            <Form setMatchResults={setMatchResults} {...renderProps} />
          )}
        />
        <Route
          path="/matchresults"
          exact
          render={(renderProps) => (
            <FindMatch matchResults={matchResults} {...renderProps} />
          )}
        />
        <Route
          path="/profile/:id"
          exact
          render={(renderProps) => (
            <Profile matchResults={matchResults} {...renderProps} />
          )}
        />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
