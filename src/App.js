
import './App.css';
import Navigation from './componets/system/Navigation';
import { Link, BrowserRouter as Router } from "react-router";
import Footer from './componets/system/Footer';
import Main from './componets/system/Main';
import Header from './componets/system/Header';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Main className="main" />
        <Footer className="footer" />
      </div>
    </Router>
  );
}

export default App;
