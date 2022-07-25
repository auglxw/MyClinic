import './App.css';
import Landing from './pages/Landing';
import Details from './pages/Details';
import Timing from './pages/Timing';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import detailsFormReducer from './reducers';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const store = createStore(detailsFormReducer);

function App() {
  return (
    <Provider store = {store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/details" element={<Details />}/>
            <Route path="/timing" element={<Timing />}/>
            <Route path="/" element={<Landing />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
