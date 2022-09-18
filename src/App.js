import "./App.css";
import TodoHeader from "./components/TodoHeader";
import TodoItem from "./components/TodoItem";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TodoModal from "./components/TodoModal";
import TodoDetails from "./components/TodoDetails";
import PageTitle from "./components/PageTitle";

function App() {
  return (
    <Router>
      <div className="container ">
        <div className="app__wrapper">
          <PageTitle>To do List</PageTitle>
          <TodoHeader />
          <div>
            <Switch>
              <Route exact path="/">
                <TodoItem />
              </Route>
              <Route path="/add">
                <TodoModal />
              </Route>
              <Route path="/todo/:id">
                <TodoDetails />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
