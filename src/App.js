import "./App.scss";
import { Header } from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import FindMatch from "./components/matches/FindMatch";
import Form from "./components/form/Form";
import "./App.scss";
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";
import { useEffect, useState } from "react";
import data from "./data/data.json";

function App() {
  const [matchResults, setMatchResults] = useState(data);
  const [rideOrDrive, setRideordrive] = useState(null);
  const onSubmit = (search)=>{
    search.preventDefault()

    console.log("from ",search.target.from.value)
    console.log("to",search.target.to.value)

    console.log("ride or drive ",rideOrDrive)
    console.log("time ",search.target.from.value)
    console.log("days ",search.target.days.value)
    const searched ={
      "from": search.target.time.value,
      "to": search.target.to.value,
      "role": rideOrDrive,
    }
    console.log('searched',searched)
    console.log('data',data)
    const filtered = data.filter(
      (w) =>
        w.from.includes(searched.from) ||
        w.to.includes(searched) ||
        w.role.includes(searched.role)
    );
    console.log(filtered)
  }

  return (
    <div className="app">
      <Switch>
        <Route path="/" exact>
          <Redirect to="/form" />
        </Route>
        <Route
          path="/form"
          exact
          render={(renderProps) => <Form sub = {onSubmit} setRideOrDrive ={setRideordrive} rideOrDrive={rideOrDrive} {...renderProps} />}
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
