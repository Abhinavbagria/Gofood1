import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from './Components/Screens/Home';
import LogIn from './Components/Screens/LogIn';
import LogOut from "./LogOut";
import Signup from "./Components/Signup";
import Details from "./Components/Details";
import Cart from "./Components/Cart";
import { store } from '../src/Redux/Store';
import { Provider } from 'react-redux';

function App() {
  

  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/details" element={<Details />} />
            <Route path="/LogOut" element={<LogOut />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/Cart" element={<Cart />} />
            <Route element={<h1>logged in</h1>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
