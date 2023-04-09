import './App.css';
import { HashRouter, Route, Routes } from "react-router-dom";
import ProfilePage from './pages/profile';
import FormPage from './pages/form';


function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/RanbirKapoor" Component={ProfilePage} />
        <Route exact path="/cart/add/:celebId" Component={FormPage} />
        <Route path='/' Component={() => {<p>Hello World</p>}} />
      </Routes>
    </HashRouter>
  );
}

export default App;
