import "./App.scss";
import { Header } from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import FindMatch from "./components/matches/FindMatch";
import Form from "./components/form/Form";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { useEffect, useState } from "react";
import data from "./data/data.json";

function App() {
  const [matchResults, setMatchResults] = useState(data);

  return (
    <>
      <Switch>
        <Route
          path="/form"
          exact
          render={(renderProps) => <Form {...renderProps} />}
        />
        <Route
          path="/matchresults"
          exact
          render={(renderProps) => (
            <FindMatch matchResults={matchResults} {...renderProps} />
          )}
        />
        <Route
          path="/profile"
          exact
          render={(renderProps) => <Profile {...renderProps} />}
        />
      </Switch>

      <Footer />
    </>
  );
}

export default App;
