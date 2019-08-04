import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import FinancialHome from "../features/financial/financial-home";

function AppRoutes() {
    return <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={FinancialHome}></Route>
            </Switch>
        </div>
        
    </Router>
}

export default AppRoutes