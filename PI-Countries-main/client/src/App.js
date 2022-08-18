import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './Components/Home';
import ActivityCreated from './Components/CreateActivity';
import CardDetail from './Components/Detail';
import LandingPage from './Components/LandingPage';



function App() {
  return (
    <BrowserRouter>
    <div className='App'>
      <Switch>
      <Route exact path='/' component={LandingPage}></Route>
      <Route exact path='/home' component={Home}></Route>
      <Route exact path='/activities' component={ActivityCreated}></Route>
      <Route exact path='/home/:id' component={CardDetail}></Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
