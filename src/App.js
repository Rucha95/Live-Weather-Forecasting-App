import './App.css';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Home from './Pages/Home';


function App() {
  return (
   
    <Router>
       <h1 class="rt"> REAL-TIME WEATHER FORECAST</h1>
       <div class="animation home">
   
      </div>
      <Routes>
      <Route path = "/" element = {<Home/>}></Route>

      </Routes>
    </Router>
  );
}

export default App;
