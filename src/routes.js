import React, { Fragment } from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import AddTutorial from "./pages/add-tutorial";

const Routes = () => (
    <BrowserRouter>
        <Fragment>
            <Switch>
            <Route
                    path="/"
                    component={() => (
                        <center>
                            <h1> Em breve... </h1>
                        </center>
                    )}
                />
                <Route exact path="/add" component={AddTutorial} />
                <Route
                    path="*"
                    component={() => (
                        <center>
                            <h1> Error 404 not found </h1>
                        </center>
                    )}
                />
            </Switch>
        </Fragment>
    </BrowserRouter>
);

export default Routes;
