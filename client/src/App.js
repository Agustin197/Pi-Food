import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import LandingPage from './pages/Landing/LandingPage';
import Nav from './components/Nav/Nav';
import Home from './pages/Home/Home';
import CreateRecipe from './pages/Create/Create';
import Detail from './pages/Detail/Detail';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Switch>  //con SWITCH renderiza una pagina u otra, no nav + home */}
          <Route exact path="/" component={LandingPage}/>
          <Route path="/home/" component={Nav}/>
          <Route exact path="/home" component={Home}/>
          <Route exact path="/home/recipes/:id" component={Detail}/>
          <Route exact path="/home/create" component={CreateRecipe}/>
        {/* </Switch> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
