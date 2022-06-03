
import './App.css';
import FunctionCEx from './FunctionCEx';
import LoginClass from './LoginClass';
import Greeting from './Greeting';
import ListComp from './ListComp';
import Login from './Login';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import $ from "jquery";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
 

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='login' element={<LoginClass/>}/>
          <Route path='list' element={<ListComp/>}/>
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
