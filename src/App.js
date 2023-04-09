import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProfilePage from './pages/profile';
import FormPage from './pages/form';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/RanbirKapoor" Component={ProfilePage} />
        <Route exact path="/cart/add/:celebId" Component={FormPage} />
        <Route path='/' Component={() => {<p>Hello World</p>}} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
