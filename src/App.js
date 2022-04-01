import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./styles/app.sass";
import Page from "./components/Page";
import Home from "./screens/Home";
import Features from "./screens/Features";
import Pricing from "./screens/Pricing";
import Download from "./screens/Download";
import Class01 from "./screens/Class01";
import Class01Details from "./screens/Class01Details";
import Class02 from "./screens/Class02";
import Class02Details from "./screens/Class02Details";
import Lifestyle from "./screens/Lifestyle";
import Article from "./screens/Article";
import LifeDesgin from "./screens/LifeDesign";
import About from "./screens/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <Page>
              <Home />
            </Page>
          )}
        />
        <Route
          exact
          path="/life-design"
          render={() => (
            <Page>
              <LifeDesgin />
            </Page>
          )}
        />
        <Route
          exact
          path="/about"
          render={() => (
            <Page>
              <About />
            </Page>
          )}
        />
        <Route
          exact
          path="/fit-mafia"
          render={() => (
            <Page>
              <Lifestyle title={"Fit Mafia"} />
            </Page>
          )}
        />
        <Route
          exact
          path="/instituitional-stories"
          render={() => (
            <Page>
              <Lifestyle title={"Instituitional Stories"} />
            </Page>
          )}
        />
        <Route
          exact
          path="/reports"
          render={() => (
            <Page>
              <Lifestyle title={"Reports"} />
            </Page>
          )}
        />
        <Route
          exact
          path="/press"
          render={() => (
            <Page>
              <Lifestyle title={"Press"} />
            </Page>
          )}
        />
        <Route
          exact
          path="/customer-stories"
          render={() => (
            <Page>
              <Class01 title={"Customer Stories"} />
            </Page>
          )}
        />
        <Route
          exact
          path="/coach-stories"
          render={() => (
            <Page>
              <Class01 title={"Coach Stories"} />
            </Page>
          )}
        />
        <Route
          exact
          path="/events"
          render={() => (
            <Page>
              <Class01 title={"Events"} />
            </Page>
          )}
        />
        {/* <Route
          exact
          path="/features"
          render={() => (
            <Page>
              <Features />
            </Page>
          )}
        />
        <Route
          exact
          path="/pricing"
          render={() => (
            <Page>
              <Pricing />
            </Page>
          )}
        />
        <Route
          exact
          path="/download"
          render={() => (
            <Page>
              <Download />
            </Page>
          )}
        />
        <Route
          exact
          path="/class01"
          render={() => (
            <Page>
              <Class01 />
            </Page>
          )}
        />
        <Route
          exact
          path="/class01-details"
          render={() => (
            <Page>
              <Class01Details />
            </Page>
          )}
        />
        <Route
          exact
          path="/class02"
          render={() => (
            <Page>
              <Class02 />
            </Page>
          )}
        />
        <Route
          exact
          path="/class02-details"
          render={() => (
            <Page>
              <Class02Details />
            </Page>
          )}
        />
        <Route
          exact
          path="/article"
          render={() => (
            <Page>
              <Article />
            </Page>
          )}
        /> */}
      </Switch>
    </Router>
  );
}

export default App;
