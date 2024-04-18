import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from './components/Header';
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from './pages/SignUp';
import ItemDetail from './pages/ItemDetail';

const App = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/itemDetail/:item_id" element={<ItemDetail/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
//component와 element의 차이: return.