import './App.css';
import Landing from './pages/Landing';
import Details from './pages/Details';
import Timing from './pages/Timing';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import detailsFormReducer from './reducers';

const store = createStore(detailsFormReducer);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <Details />
      </div>
    </Provider>
  );
}

export default App;
