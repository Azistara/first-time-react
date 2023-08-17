import "./index.css"
import Navbar from "./navBar";
import Home from "./home";
import Create from "./create";
import BlogDetails from "./BlogDetails";

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">    {/*Route Home*/}
              <Home />
            </Route>
            <Route path="/create">    {/*Route Create*/}
              <Create />
            </Route>
            <Route path="/blog/:id">    {/*Route Blog*/}
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
