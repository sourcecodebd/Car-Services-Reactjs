import './App.css';
import Home from './Pages/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Pages/Header/Header';
import Login from './Pages/Login/Login';
import AuthProvider from './context/AuthProvider';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import Shipping from './Pages/Shipping/Shipping';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import Footer from './Pages/Footer/Footer';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <PrivateRoute path='/service-details/:serviceId'>
              <ServiceDetails />
            </PrivateRoute>
            <PrivateRoute path='/place-order'>
              <PlaceOrder />
            </PrivateRoute>
            <PrivateRoute path='/shipping'>
              <Shipping />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
