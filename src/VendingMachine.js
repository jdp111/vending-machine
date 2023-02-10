import React from 'react'
import {BrowserRouter, Route, NavLink, withRouter, Switch} from "react-router-dom"
import Cookie from "./Cookie"
import Milk from "./Milk"
import Candy from "./Candy"

function VendingMachine() {


    return (
        <div>

            <h1>Vending Machine</h1>
            
            <h2>Make a selection:</h2>

            <BrowserRouter>
            
                <NavLink  exact to = "/cookie">
                    cookie
                </NavLink>
                <br/>
                <NavLink exact to = "/milk">
                    chocolate milk
                </NavLink>
                <br/>
                <NavLink exact to= "/candy">
                    fruity candy
                </NavLink>
                

                <Route exact path = "/cookie" >
                    <Cookie/>
                </Route>

                <Route exact path = "/milk" >
                    <Milk/>
                </Route>

                <Route exact path = "/candy" >
                    <Candy/>
                </Route>


            </BrowserRouter>
        </div>
    )
}

export default VendingMachine