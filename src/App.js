
import './App.css';
import Create from './Components/Create/Create';
import Home from './Components/Home/Home';
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Update from './Components/Update/Update';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element = {<Create/>}></Route>
        <Route path='/edit/:id' element = {<Update/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
