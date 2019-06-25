import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

/* eslint-disable */

// SS

export const routes = [
  {
    path: "/account",
    component: Account,
    meta: {
      title: "Account",
      requiresAuth: true
    }
  },
  {
    path: "/",
    component: Home,
    meta: {
      title: "Home"
    }
  }
];

// XX

const Home = {};
const Account = {};

function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

//SS

function AppRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;

//XX

// eslint-disable

const note = {
  state: {
    notes: []
  },
  getters: {
    notes: state => state.notes
  },
  mutation: {
    ADD_NODE(state, note) {
      state.notes.push(note);
    }
  },
  actions: {
    async createNote({ dispatch }, data) {
      try {
        await axios.post("notes", data);
        dispatch("ADD_NODE", data);
      } catch {
        // error handling
      }
    }
  }
};

console.log(note  );
