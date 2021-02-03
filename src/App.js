import Jeopardy from "./components/jeopardy/Jeopardy";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Welcome from "./components/welcome/Welcome";
import Navigation from "./components/navigation/Navigation";
import PageNotFound from "./components/pageNotFound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route exact path="/" components={Jeopardy} />
        <Route path="/Welcome/:name" components={Welcome} />
        {/* <Route path="/clock" component={Clock} />
        <Route path="/contact" component={Contact} /> */}
        {/* <Route components={PageNotFound} /> */}
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
