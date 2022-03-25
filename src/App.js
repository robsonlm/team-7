import "./App.scss";
import { Header } from "./components/Header/Header";
import Footer from "./components/footer/Footer";
import FindMatch from "./components/matches/FindMatch";
import Form from "./components/form/Form";
import './App.scss';
import { Redirect, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile/Profile";

function App() {
  return (
 
    <div className="app">
      <Header />
      <Switch>
      <Route
            path="/form"
            exact
            render={(renderProps) => <Form  {...renderProps} />}
      />
      <Route
            path="/findmatch"
            exact
            render={(renderProps) => <FindMatch  {...renderProps} />}
      />
      <Route
            path="/profile/"
            exact
            render={(renderProps) => <Profile {...renderProps} />}
      />
      </ Switch>
        
        
      <Footer />
   
    </div>
  );
}

export default App;
