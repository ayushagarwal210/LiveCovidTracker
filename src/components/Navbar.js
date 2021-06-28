import React from 'react'
import './Navbar.css'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Covid from './Covid'
import Vaccine from './Vaccine'

const Navbar = () => {
  return (
    <Router>
      <div>
        <div className="Navbar">
          <ul>
            <div className="head">
              <li>
                <img
                  src="https://www.politico.eu/wp-content/uploads/2020/03/coronavaccineRGB-1200x628.jpg"
                  alt=""
                />
              </li>
              <li>
                <Link to="/">Live Covid Tracker</Link>
              </li>
            </div>
            <div className="Navbar_body">
              <li>
                <Link to="/corona">Covid-Data</Link>
              </li>
              <li>
                <Link to="/vaccine">Vaccine-Slot</Link>
              </li>
            </div>
          </ul>
        </div>

        <Switch>
          <Route path="/corona">
            <Covid />
          </Route>
          <Route path="/vaccine">
            <Vaccine />
          </Route>
          <Route path="/">
            <Covid />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default Navbar
