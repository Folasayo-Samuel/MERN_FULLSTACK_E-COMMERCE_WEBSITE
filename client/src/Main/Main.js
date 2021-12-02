import { Component } from "react";
import { Provider } from "react-redux";
import App from "../App";
import store from "../store/store";
import { loadUser } from "../actions/authActions";
import { BrowserRouter } from "react-router-dom";

class Main extends Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <App />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default Main;
