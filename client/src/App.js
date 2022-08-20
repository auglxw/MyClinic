import './App.css';
import Landing from './pages/Landing';
import Details from './pages/Details';
import Timing from './pages/Timing';
import UserType from './pages/UserType';
import CheckQueue from './pages/CheckQueue';
import BookingConfirmed from './pages/Confirmation';
import QueueStatus from './pages/QueueStatus';
import LoginPage from './pages/Login';
import Protected from './components/ProtectedRoute';
import Internal from './pages/Internal';
import InternalEdit from './pages/InternalEdit';
import { createStore } from "redux";
import { Provider } from 'react-redux'
import combinedReducer from './reducers';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import { PersistGate } from 'redux-persist/lib/integration/react';

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2
};

const pReducer = persistReducer(persistConfig, combinedReducer);

const store = createStore(pReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const persistor = persistStore(store);

function App() {
  return (
    <Provider store = {store}>
    <PersistGate persistor={persistor}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/usertype" element={<UserType />}/>
            <Route path="/checkqueue" element={<CheckQueue />}/>
            <Route path="/details" element={<Details />}/>
            <Route path="/timing" element={<Protected formValid={true} page={<Details />} target={<Timing />} />}/>
            <Route path="/bookingconfirmed" element={<BookingConfirmed />}/>
            <Route path="/queuestatus" element={<QueueStatus />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/internal" element={<Internal />} />
            <Route path="/internaledit" element={<InternalEdit />} />
            <Route path="/" element={<Landing />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </PersistGate>
    </Provider>
  );
}

export default App;
