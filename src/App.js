
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'
import Header from './header'
import AboutPage from './about'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const App=()=> {

  const toUpper=(name)=>{
    return name.toUpperCase()
  }

  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Route exact path='/' component={()=>(<Header name='Abir' toUpper={(name)=>toUpper(name)}/>)}/>
          <Route exact path='/about' component={AboutPage}/>
        </Router>
       
      </header>
    </div>
  );
}

export default App;
