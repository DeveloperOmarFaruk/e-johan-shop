import {
  BrowserRouter as Router,
  Switch, Route
} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { GlobalStyle } from './GlobalStyle'
import Header from './Components/Header/Header'
import Shop from './Components/Shop/Shop'
import Review from './Components/Review/Review'
import Inventory from './Components/Inventory/Inventory'
import Error from './Components/Error'
import ProductDetails from './Components/Product/ProductDetails'
import LogIn from './Components/LogIn/LogIn'
import Shipment from './Components/Shipment/Shipment'
import { createContext } from 'react'
import PrivateRoute from './Components/PrivateRote/PrivateRoute'



export const UserContext = createContext([])


function App(props) {

  const [loggedInUser, setLoggedInUser] = useState([])

  return (
    <>
      <Router>
        <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
          <Header />
          <GlobalStyle />


          <Switch>
            <Route path='/shop' exact>
              <Shop />
            </Route>

            <Route path='/review' exact>
              <Review />
            </Route>


            <PrivateRoute path='/manage' exact>
              <Inventory />
            </PrivateRoute>


            <Route path='/login' exact>
              <LogIn />
            </Route>


            <PrivateRoute path='/shipment' exact>
              <Shipment />
            </PrivateRoute>

            <Route path='/shop' exact>
              <Shop />
            </Route>

            <Route path='/product/:key' exact>
              <ProductDetails />
            </Route>


            <Route path='*' exact>
              <Error />
            </Route>

          </Switch>
        </UserContext.Provider>
      </Router>
    </>
  );
}
export default App;




