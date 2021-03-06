import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import SearchEmployes from "../features/search-employes/search-employes";
import EmployeDetails from "../features/employe-details/employe-detail";
import FinancialHome from "../features/financial/financial-home";

function AppRoutes() {
    return <Router>
        <div className="App">
            <Switch>
                <Route exact path="/" component={FinancialHome}></Route>
                <Route exact path="/searchEmploye" component={SearchEmployes}></Route>
                <Route path="/details/:eid" component={EmployeDetails}></Route>                   
            </Switch>
        </div>
        
    </Router>
}

export default AppRoutes